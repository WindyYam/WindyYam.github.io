
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameScene } from './components/GameScene.tsx';
import { UIManager } from './components/UIManager.tsx';
import { FullscreenButton } from './components/FullscreenButton.tsx'; // Added
import { 
    TowerType, Tower, Vector3D, GamePhase, GridCell, Particle, 
    UnitType, GameUnit, UnitProjectile, UnitOwner, UnitStats as UnitStatsType, FireArea
} from './types.ts';
import {
  TOWER_SPECS, INITIAL_MONEY, GRID_SIZE_X, GRID_SIZE_Z, CELL_SIZE, GROUND_LEVEL_Y, 
  LASER_DURATION, PROJECTILE_LIFESPAN, LASER_BEAM_WIDTH, LASER_HIT_SOUND_INTERVAL_MS,
  TOWER_BASE_HEIGHT, PARTICLE_COUNT_PER_EXPLOSION, PARTICLE_LIFESPAN_MS, PARTICLE_BASE_SPEED,
  PARTICLE_INITIAL_SIZE, PARTICLE_COLOR_CANNON, PARTICLE_COLOR_ENEMY_DEATH, TANK_BODY_WIDTH, 
  PARTICLE_COLOR_PLAYER_DEATH, 
  PLAYER_BASE_INITIAL_HEALTH, PLAYER_BASE_POSITION_GRID_Z, PLAYER_BASE_SIZE_CELLS_X, PLAYER_BASE_ID,
  UNIT_SPECS, TowerStats, UnitStats, 
  UNIT_PROJECTILE_SPEED, UNIT_PROJECTILE_LIFESPAN, PROJECTILE_GRAVITY, GRENADE_TIME_TO_TARGET_APPROX,
  TANK_BODY_HEIGHT, TANK_TURRET_RADIUS, TANK_BARREL_LENGTH, TANK_TURRET_HEIGHT, TANK_BARREL_RADIUS, 
  INFANTRY_BODY_HEIGHT, INFANTRY_BODY_DEPTH, INFANTRY_BODY_WIDTH, ARTILLERY_CHASSIS_HEIGHT, ARTILLERY_CHASSIS_WIDTH, ARTILLERY_CHASSIS_DEPTH, 
  ENEMY_BASE_INITIAL_HEALTH, ENEMY_BASE_GRID_Z, ENEMY_BASE_SIZE_CELLS_X, ENEMY_BASE_ID,
  PLAYER_UNIT_SPAWN_OFFSET_Z,
  ENEMY_INITIAL_MONEY, ENEMY_MONEY_INCREASE_RATE, 
  SUPER_TANK_SPAWN_TIME_THRESHOLD_MS, SUPER_TANK_SPAWN_INTERVAL_MS, 
  SUPER_TANK_SPAWN_PROBABILITY, MAX_ACTIVE_SUPER_TANKS,
  TOWER_DETECTION_RANGE,
  VICTORY_FIREWORK_INTERVAL_MS, FIREWORK_COLORS, FIREWORK_SPAWN_Y, FIREWORK_SPAWN_X_RANGE,
  FIREWORK_EXPLOSION_PARTICLE_COUNT, FIREWORK_EXPLOSION_PARTICLE_LIFESPAN_MS,
  FIREWORK_EXPLOSION_BASE_SPEED, FIREWORK_GRAVITY, FIREWORK_SPAWN_Z_RANGE,
  INFANTRY_SELF_REGEN_RATE, INFANTRY_REPAIR_DETECTION_RANGE, INFANTRY_REPAIR_EFFECT_RANGE,
  VEHICLE_REGEN_PER_INFANTRY_RATE, MAX_VEHICLE_REGEN_FROM_INFANTRY_RATE,
  ENEMY_SPAWN_BURST_INTERVAL_MS, ENEMY_BURST_COMPOSITIONS, BurstUnitComposition, EnemyBurstTier,
  BASE_AUTO_REGEN_RATE_PER_SECOND, BASE_REPAIR_COST_PER_HP,
  FIRE_PARTICLE_SPAWN_RATE_PER_AREA_PER_SECOND, FIRE_PARTICLE_COLORS,
  FIRE_PARTICLE_LIFESPAN_MS_MIN, FIRE_PARTICLE_LIFESPAN_MS_MAX,
  FIRE_PARTICLE_BASE_SPEED_MIN, FIRE_PARTICLE_BASE_SPEED_MAX,
  FIRE_PARTICLE_INITIAL_SIZE_MIN, FIRE_PARTICLE_INITIAL_SIZE_MAX,
  FIRE_PARTICLE_RISE_SPEED, FIRE_PARTICLE_SPREAD_RADIUS_FACTOR,
  FIRE_AREA_HIT_SOUND_INTERVAL_MS, 
  GRID_HALF_WIDTH, 
  GRID_HALF_DEPTH,
  MAX_TOTAL_PARTICLES
} from './constants.ts';

const generateId = (): string => Math.random().toString(36).substring(2, 15);
const distance3D = (p1: Vector3D, p2: Vector3D): number => {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow(p1.z - p2.z, 2));
};

const distanceSquared = (v: Vector3D, w: Vector3D): number => {
    return Math.pow(v.x - w.x, 2) + Math.pow(v.y - w.y, 2) + Math.pow(v.z - w.z, 2);
};

const distanceToLineSegment = (p: Vector3D, v: Vector3D, w: Vector3D): number => {
    const l2 = distanceSquared(v, w);
    if (l2 === 0) return distance3D(p, v);
    let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y) + (p.z - v.z) * (w.z - v.z)) / l2;
    t = Math.max(0, Math.min(1, t));
    const closestPoint = {
        x: v.x + t * (w.x - v.x),
        y: v.y + t * (w.y - v.y),
        z: v.z + t * (w.z - v.z)
    };
    return distance3D(p, closestPoint);
};

const calculatePlayerBaseCenterPosition = () => ({
    x: 0,
    y: GROUND_LEVEL_Y + TANK_BODY_HEIGHT / 2, 
    z: (PLAYER_BASE_POSITION_GRID_Z * CELL_SIZE) - GRID_HALF_DEPTH + (CELL_SIZE / 2),
});

const calculateEnemyBaseCenterPosition = () => ({
    x: 0,
    y: GROUND_LEVEL_Y + TANK_BODY_HEIGHT / 2,
    z: (ENEMY_BASE_GRID_Z * CELL_SIZE) - GRID_HALF_DEPTH + (CELL_SIZE / 2),
});


const getProjectileRadius = (projectileType: TowerType | UnitType): number => {
    if (projectileType === TowerType.CANNON || projectileType === UnitType.ARTILLERY) return CELL_SIZE * 0.25;
    else if (projectileType === TowerType.MACHINE_GUN) return CELL_SIZE * 0.05;
    else if (projectileType === UnitType.INFANTRY) return CELL_SIZE * 0.04;
    else if (projectileType === UnitType.SUPER_TANK) return CELL_SIZE * 0.15;
    else if (projectileType === UnitType.LIGHT_TANK || projectileType === UnitType.HEAVY_TANK) return CELL_SIZE * 0.12;
    else if (projectileType === UnitType.GRENADIER) return CELL_SIZE * 0.15;
    return CELL_SIZE * 0.1;
};

const SOUND_KEYS = {
    MACHINE_GUN_FIRE: 'machine_gun_fire', CANNON_FIRE: 'cannon_fire', TANK_FIRE: 'tank_fire',
    UNIT_DEATH_PLAYER: 'unit_death_player', UNIT_DEATH_ENEMY: 'unit_death_enemy',
    UNIT_HIT_PLAYER: 'unit_hit_player', UNIT_HIT_ENEMY: 'unit_hit_enemy',
    BASE_EXPLOSION_PLAYER: 'base_explosion_player', BASE_EXPLOSION_ENEMY: 'base_explosion_enemy',
    CANNON_BALL_EXPLODE: 'cannon_ball_explode', BGM_COMBAT: 'bgm_combat',
    FIREWORK_EXPLODE: 'firework_explode', INFANTRY_FIRE: 'infantry_fire',
    GRENADE_EXPLODE: 'grenade_explode',
} as const;
type SoundKey = typeof SOUND_KEYS[keyof typeof SOUND_KEYS];

const audioContextRef = React.createRef<AudioContext | null>() as React.MutableRefObject<AudioContext | null>;
const soundBuffersRef = React.createRef<Record<string, AudioBuffer>>() as React.MutableRefObject<Record<string, AudioBuffer>>;
if (!soundBuffersRef.current) soundBuffersRef.current = {};
const bgmSourceNodeRef = React.createRef<AudioBufferSourceNode | null>() as React.MutableRefObject<AudioBufferSourceNode | null>;

const loadSound = async (key: SoundKey, filePath: string) => {
    if (!audioContextRef.current) return;
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);
        soundBuffersRef.current[key] = audioBuffer;
    } catch (error) { console.error(`Error loading sound ${key} from ${filePath}:`, error); }
};

const playSound = (key: SoundKey, volume: number = 1.0, loop: boolean = false): AudioBufferSourceNode | null => {
    if (!audioContextRef.current || !soundBuffersRef.current[key]) {
        return null;
    }
    if (audioContextRef.current.state !== 'running') {
        return null;
    }
    const source = audioContextRef.current.createBufferSource();
    source.buffer = soundBuffersRef.current[key];
    source.loop = loop;
    const gainNode = audioContextRef.current.createGain();
    gainNode.gain.setValueAtTime(volume, audioContextRef.current.currentTime);
    source.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);
    source.start(0);
    return loop ? source : null;
};

const resumeAudioContext = () => {
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        return audioContextRef.current.resume()
            .then(() => {})
            .catch(e => {
                console.error("Error resuming audio context:", e);
                throw e; 
            });
    }
    return Promise.resolve(); 
};

const triggerEnemyBurstSpawn = (
    currentTime: number, gameStartTime: number | null, currentEnemyMoney: number
): { updatedMoney: number; newUnits: GameUnit[] } => {
    let newUnits: GameUnit[] = [];
    let updatedMoney = currentEnemyMoney;
    const timeSinceGameStart = gameStartTime ? currentTime - gameStartTime : 0;
    let selectedBurstTier: EnemyBurstTier | null = null;
    for (let i = ENEMY_BURST_COMPOSITIONS.length - 1; i >= 0; i--) {
        if (timeSinceGameStart >= ENEMY_BURST_COMPOSITIONS[i].minTime) {
            selectedBurstTier = ENEMY_BURST_COMPOSITIONS[i]; break;
        }
    }
    if (selectedBurstTier) {
        const burstBudget = updatedMoney * selectedBurstTier.maxAffordableCostPercent;
        let spentOnBurst = 0;
        const spawnSpreadFactor = selectedBurstTier.spawnSpreadFactor !== undefined ? selectedBurstTier.spawnSpreadFactor : 0.9;
        const isEndless = selectedBurstTier.isEndlessWave === true;
        for (const burstUnitComp of selectedBurstTier.units) {
            const unitSpecToSpawn = UNIT_SPECS[burstUnitComp.type];
            if (unitSpecToSpawn.cost <= 0 && burstUnitComp.type !== UnitType.SUPER_TANK) continue;
            let desiredCountForType = burstUnitComp.count;
            if (isEndless) {
                const randomFactor = 0.8 + Math.random() * 0.2;
                desiredCountForType = Math.floor(burstUnitComp.count * randomFactor);
            }
            for (let i = 0; i < desiredCountForType; i++) {
                if (spentOnBurst + unitSpecToSpawn.cost <= burstBudget && updatedMoney >= unitSpecToSpawn.cost) {
                    updatedMoney -= unitSpecToSpawn.cost; spentOnBurst += unitSpecToSpawn.cost;
                    const spawnGridXOffset = (Math.random() - 0.5) * (GRID_SIZE_X * spawnSpreadFactor);
                    const spawnWorldX = spawnGridXOffset * CELL_SIZE;
                    const enemyBaseWorldZ = (ENEMY_BASE_GRID_Z * CELL_SIZE) - GRID_HALF_DEPTH + (CELL_SIZE / 2);
                    const spawnWorldZ = enemyBaseWorldZ + CELL_SIZE * (0.5 + Math.random() * 0.5);

                    let unitModelHeight = TANK_BODY_HEIGHT;
                    if (burstUnitComp.type === UnitType.INFANTRY || burstUnitComp.type === UnitType.GRENADIER) unitModelHeight = INFANTRY_BODY_HEIGHT;
                    else if (burstUnitComp.type === UnitType.ARTILLERY) unitModelHeight = ARTILLERY_CHASSIS_HEIGHT;
                    const newEnemyUnit: GameUnit = {
                        id: generateId(), type: burstUnitComp.type, owner: 'ENEMY',
                        position: { x: spawnWorldX, y: GROUND_LEVEL_Y + unitModelHeight / 2 * (unitSpecToSpawn.visualScale || 1), z: spawnWorldZ },
                        health: unitSpecToSpawn.health, targetId: PLAYER_BASE_ID, rotationY: 0, lastAttackTime: 0,
                    };
                    newUnits.push(newEnemyUnit);
                } else { break; }
            }
        }
    }
    return { updatedMoney, newUnits };
};

const App: React.FC = () => {
  const [gamePhase, setGamePhase] = useState<GamePhase>('PLACEMENT');
  const [towers, setTowers] = useState<Tower[]>([]);
  const [playerUnits, setPlayerUnits] = useState<GameUnit[]>([]);
  const [enemyUnits, setEnemyUnits] = useState<GameUnit[]>([]);
  const [unitProjectiles, setUnitProjectiles] = useState<UnitProjectile[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]); 
  const [activeFireAreas, setActiveFireAreas] = useState<FireArea[]>([]);
  const [money, setMoney] = useState<number>(INITIAL_MONEY);
  const [enemyMoney, setEnemyMoney] = useState<number>(ENEMY_INITIAL_MONEY);
  const [playerBaseHealth, setPlayerBaseHealth] = useState<number>(PLAYER_BASE_INITIAL_HEALTH);
  const [enemyBaseHealth, setEnemyBaseHealth] = useState<number>(ENEMY_BASE_INITIAL_HEALTH);
  const [selectedTowerType, setSelectedTowerType] = useState<TowerType | null>(null);
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [detectedByPlayer, setDetectedByPlayer] = useState(new Set<string>());
  const [detectedByEnemy, setDetectedByEnemy] = useState(new Set<string>());
  
  const playerBaseCenterPositionRef = useRef(calculatePlayerBaseCenterPosition());
  const enemyBaseCenterPositionRef = useRef(calculateEnemyBaseCenterPosition());
  const lastUpdateTimeRef = useRef<number>(performance.now());
  const gameStartTimeRef = useRef<number | null>(null);
  const lastSuperTankSpawnAttemptTimeRef = useRef<number>(0);
  const firstSuperTankSpawnOccurredRef = useRef<boolean>(false);
  const lastEnemyBurstTimeRef = useRef<number>(0);
  const lastVictoryFireworkTimeRef = useRef<number>(0);
  const gamePhaseRef = useRef(gamePhase);
  useEffect(() => { gamePhaseRef.current = gamePhase; }, [gamePhase]);

  const particlePoolRef = useRef<Particle[]>([]);

  const activateParticlesFromPool = useCallback((count: number, setupFn: (particle: Particle, index: number) => void): Particle[] => {
    const activated: Particle[] = [];
    let activatedCount = 0;
    for (const p of particlePoolRef.current) {
        if (!p.isActive) {
            setupFn(p, activatedCount); 
            activated.push(p);
            activatedCount++;
            if (activatedCount >= count) break;
        }
    }
    return activated;
  }, []);

  const createExplosionParticles = useCallback((position: Vector3D, color: number, currentTime: number): Particle[] => {
      return activateParticlesFromPool(PARTICLE_COUNT_PER_EXPLOSION, (p) => {
          const angle = Math.random() * Math.PI * 2;
          const verticalAngle = (Math.random() - 0.5) * Math.PI;
          const speed = PARTICLE_BASE_SPEED * (0.5 + Math.random() * 1.5);
          
          p.position = { ...position };
          p.velocity = {
              x: Math.cos(angle) * Math.cos(verticalAngle) * speed,
              y: Math.abs(Math.sin(verticalAngle)) * speed,
              z: Math.sin(angle) * Math.cos(verticalAngle) * speed
          };
          p.startTime = currentTime;
          p.maxLife = PARTICLE_LIFESPAN_MS * (0.7 + Math.random() * 0.6);
          p.color = color;
          p.initialSize = PARTICLE_INITIAL_SIZE * (0.7 + Math.random() * 0.6);
          p.currentSize = p.initialSize;
          p.isActive = true;
          p.hasGravity = false;
      });
  }, [activateParticlesFromPool]);

  const createFireworkBurstParticles = useCallback((position: Vector3D, currentTime: number): Particle[] => {
      const baseColor = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
      return activateParticlesFromPool(FIREWORK_EXPLOSION_PARTICLE_COUNT, (p) => {
          const angle = Math.random() * Math.PI * 2;
          const verticalAngle = Math.acos(1 - 2 * Math.random()); 
          const speed = FIREWORK_EXPLOSION_BASE_SPEED * (0.6 + Math.random() * 0.8);
          
          p.position = { ...position };
          p.velocity = {
              x: Math.sin(verticalAngle) * Math.cos(angle) * speed,
              y: Math.cos(verticalAngle) * speed + (Math.random() * FIREWORK_EXPLOSION_BASE_SPEED * 0.1),
              z: Math.sin(verticalAngle) * Math.sin(angle) * speed
          };
          p.startTime = currentTime;
          p.maxLife = FIREWORK_EXPLOSION_PARTICLE_LIFESPAN_MS * (0.8 + Math.random() * 0.4);
          p.color = baseColor;
          p.initialSize = PARTICLE_INITIAL_SIZE * (0.9 + Math.random() * 0.3);
          p.currentSize = p.initialSize;
          p.isActive = true;
          p.hasGravity = true;
      });
  }, [activateParticlesFromPool]);
  
  const createSingleFireParticleAndActivate = useCallback((fireAreaPosition: Vector3D, fireAreaRadius: number, currentTime: number): Particle | null => {
    let activatedParticle: Particle | null = null;
    for (const p of particlePoolRef.current) {
        if (!p.isActive) {
            const angle = Math.random() * Math.PI * 2;
            const spawnRadius = Math.random() * fireAreaRadius * FIRE_PARTICLE_SPREAD_RADIUS_FACTOR;
            const startX = fireAreaPosition.x + Math.cos(angle) * spawnRadius;
            const startZ = fireAreaPosition.z + Math.sin(angle) * spawnRadius;

            p.position = { x: startX, y: fireAreaPosition.y + CELL_SIZE * 0.05, z: startZ };
            p.velocity = {
                x: (Math.random() - 0.5) * FIRE_PARTICLE_BASE_SPEED_MIN * 0.5,
                y: FIRE_PARTICLE_RISE_SPEED * (0.8 + Math.random() * 0.4),
                z: (Math.random() - 0.5) * FIRE_PARTICLE_BASE_SPEED_MIN * 0.5,
            };
            p.startTime = currentTime;
            p.maxLife = FIRE_PARTICLE_LIFESPAN_MS_MIN + Math.random() * (FIRE_PARTICLE_LIFESPAN_MS_MAX - FIRE_PARTICLE_LIFESPAN_MS_MIN);
            p.color = FIRE_PARTICLE_COLORS[Math.floor(Math.random() * FIRE_PARTICLE_COLORS.length)];
            p.initialSize = FIRE_PARTICLE_INITIAL_SIZE_MIN + Math.random() * (FIRE_PARTICLE_INITIAL_SIZE_MAX - FIRE_PARTICLE_INITIAL_SIZE_MIN);
            p.currentSize = p.initialSize;
            p.hasGravity = false;
            p.isActive = true;
            activatedParticle = p;
            break; 
        }
    }
    return activatedParticle;
  }, []);


  useEffect(() => {
    if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        loadSound(SOUND_KEYS.MACHINE_GUN_FIRE, '/sounds/machine_gun_fire.mp3'); loadSound(SOUND_KEYS.CANNON_FIRE, '/sounds/cannon_fire.mp3');
        loadSound(SOUND_KEYS.TANK_FIRE, '/sounds/tank_fire.mp3'); loadSound(SOUND_KEYS.UNIT_DEATH_PLAYER, '/sounds/unit_death_player.mp3');
        loadSound(SOUND_KEYS.UNIT_DEATH_ENEMY, '/sounds/unit_death_enemy.mp3'); loadSound(SOUND_KEYS.UNIT_HIT_PLAYER, '/sounds/unit_hit_player.mp3');
        loadSound(SOUND_KEYS.UNIT_HIT_ENEMY, '/sounds/unit_hit_enemy.mp3'); loadSound(SOUND_KEYS.BASE_EXPLOSION_PLAYER, '/sounds/base_explosion_player.mp3');
        loadSound(SOUND_KEYS.BASE_EXPLOSION_ENEMY, '/sounds/base_explosion_enemy.mp3'); loadSound(SOUND_KEYS.CANNON_BALL_EXPLODE, '/sounds/cannon_ball_explode.mp3');
        loadSound(SOUND_KEYS.BGM_COMBAT, '/sounds/bgm_combat.mp3'); loadSound(SOUND_KEYS.FIREWORK_EXPLODE, '/sounds/firework_explode.mp3');
        loadSound(SOUND_KEYS.INFANTRY_FIRE, '/sounds/infantry_fire.mp3'); loadSound(SOUND_KEYS.GRENADE_EXPLODE, '/sounds/grenade_explode.mp3');
    }

    if (particlePoolRef.current.length === 0 && MAX_TOTAL_PARTICLES > 0) {
        for (let i = 0; i < MAX_TOTAL_PARTICLES; i++) {
            particlePoolRef.current.push({
                id: generateId(),
                position: { x: 0, y: 0, z: 0 },
                velocity: { x: 0, y: 0, z: 0 },
                startTime: 0,
                maxLife: 0,
                color: 0,
                initialSize: 0,
                currentSize: 0,
                isActive: false, 
                hasGravity: false,
            });
        }
    }

    playerBaseCenterPositionRef.current = calculatePlayerBaseCenterPosition();
    enemyBaseCenterPositionRef.current = calculateEnemyBaseCenterPosition();
    const newGrid: GridCell[][] = [];
    const playerBaseStartGridX = Math.floor(GRID_SIZE_X / 2 - PLAYER_BASE_SIZE_CELLS_X / 2);
    const enemyBaseStartGridX = Math.floor(GRID_SIZE_X / 2 - ENEMY_BASE_SIZE_CELLS_X / 2);
    for (let i = 0; i < GRID_SIZE_X; i++) {
      newGrid[i] = [];
      for (let j = 0; j < GRID_SIZE_Z; j++) {
        let isPlayerBaseCell = j === PLAYER_BASE_POSITION_GRID_Z && i >= playerBaseStartGridX && i < playerBaseStartGridX + PLAYER_BASE_SIZE_CELLS_X;
        let isEnemyBaseCell = j === ENEMY_BASE_GRID_Z && i >= enemyBaseStartGridX && i < enemyBaseStartGridX + ENEMY_BASE_SIZE_CELLS_X;
        newGrid[i][j] = { x: i, z: j, isOccupied: isPlayerBaseCell || isEnemyBaseCell, isPlayerBase: isPlayerBaseCell, isEnemyBase: isEnemyBaseCell };
      }
    }
    setGrid(newGrid);
    return () => {};
  }, []);

  const handleSelectTowerType = useCallback((type: TowerType | null) => {
    resumeAudioContext(); 
    setSelectedTowerType(type);
  }, []);

  const handlePlaceTower = useCallback((gridPosition: { x: number; z: number }) => {
    resumeAudioContext();
    if (!selectedTowerType || gamePhaseRef.current === 'GAME_OVER' || gamePhaseRef.current === 'VICTORY') return;
    const towerSpec = TOWER_SPECS[selectedTowerType];
    if (money < towerSpec.cost) { alert("Not enough money!"); return; }

    if (gridPosition.z !== PLAYER_BASE_POSITION_GRID_Z) { alert("Towers can only be built on your base's row!"); return; }
    if (gridPosition.x < 0 || gridPosition.x >= GRID_SIZE_X || gridPosition.z < 0 || gridPosition.z >= GRID_SIZE_Z) { alert("Cannot place tower outside the grid."); return; }
    if (grid[gridPosition.x][gridPosition.z].isOccupied) { alert(grid[gridPosition.x][gridPosition.z].isPlayerBase ? "Cannot place tower on your base!" : (grid[gridPosition.x][gridPosition.z].isEnemyBase ? "Cannot place on enemy base!" : "Cell is already occupied!")); return; }
    
    const newTower: Tower = {
      id: generateId(), type: selectedTowerType,
      position: { 
        x: gridPosition.x * CELL_SIZE - GRID_HALF_WIDTH + CELL_SIZE / 2, 
        y: GROUND_LEVEL_Y, 
        z: gridPosition.z * CELL_SIZE - GRID_HALF_DEPTH + CELL_SIZE / 2, 
      },
      lastShotTime: 0,
    };
    setTowers(prev => [...prev, newTower]);
    setMoney(prev => prev - towerSpec.cost);
    setGrid(prevGrid => {
      const updatedGrid = prevGrid.map(row => row.map(cell => ({ ...cell })));
      updatedGrid[gridPosition.x][gridPosition.z].isOccupied = true; return updatedGrid;
    });
    setSelectedTowerType(null);
  }, [selectedTowerType, grid, money]);

  const handleBuildPlayerUnit = useCallback((unitType: UnitType) => {
    resumeAudioContext();
    if (gamePhaseRef.current === 'GAME_OVER' || gamePhaseRef.current === 'VICTORY') return;
    const unitSpec = UNIT_SPECS[unitType];
    if (unitType === UnitType.SUPER_TANK) { alert("This unit cannot be built by players."); return; }
    if (money < unitSpec.cost) { alert("Not enough money to build unit!"); return; }
    setMoney(prev => prev - unitSpec.cost);
    const spawnX = (Math.random() - 0.5) * (GRID_SIZE_X * CELL_SIZE * 0.95);
    const spawnZ = playerBaseCenterPositionRef.current.z + PLAYER_UNIT_SPAWN_OFFSET_Z;
    let unitModelHeight = TANK_BODY_HEIGHT;
    if (unitType === UnitType.INFANTRY || unitType === UnitType.GRENADIER) unitModelHeight = INFANTRY_BODY_HEIGHT;
    else if (unitType === UnitType.ARTILLERY) unitModelHeight = ARTILLERY_CHASSIS_HEIGHT;
    const newUnit: GameUnit = {
      id: generateId(), type: unitType, owner: 'PLAYER',
      position: { x: spawnX, y: GROUND_LEVEL_Y + unitModelHeight / 2 * (unitSpec.visualScale || 1), z: spawnZ },
      health: unitSpec.health, targetId: ENEMY_BASE_ID, lastAttackTime: 0, rotationY: Math.PI,
    };
    setPlayerUnits(prev => [...prev, newUnit]);
  }, [money]);

  const handleStartCombat = useCallback(() => {
    if (gamePhaseRef.current !== 'PLACEMENT') return;

    resumeAudioContext().then(() => {
        if (audioContextRef.current && audioContextRef.current.state === 'running') {
            if (bgmSourceNodeRef.current) { 
                bgmSourceNodeRef.current.stop();
                bgmSourceNodeRef.current.disconnect(); 
                bgmSourceNodeRef.current = null;
            }
            if (soundBuffersRef.current[SOUND_KEYS.BGM_COMBAT]) {
                const source = playSound(SOUND_KEYS.BGM_COMBAT, 0.25, true);
                if (source) {
                    bgmSourceNodeRef.current = source;
                }
            }
        }

        setGamePhase('ACTIVE_COMBAT');
        const now = performance.now();
        gameStartTimeRef.current = now;
        lastSuperTankSpawnAttemptTimeRef.current = now;
        firstSuperTankSpawnOccurredRef.current = false;
        
        setEnemyMoney(prevMoney => {
            const { updatedMoney, newUnits } = triggerEnemyBurstSpawn(now, now, prevMoney);
            if (newUnits.length > 0) setEnemyUnits(prevUnits => [...prevUnits, ...newUnits]);
            return updatedMoney;
        });
        lastEnemyBurstTimeRef.current = now;
        lastVictoryFireworkTimeRef.current = now;
    }).catch(e => {
        console.error("Error resuming audio context on start combat, BGM might not play:", e);
        setGamePhase('ACTIVE_COMBAT');
        const now = performance.now();
        gameStartTimeRef.current = now;
        lastSuperTankSpawnAttemptTimeRef.current = now;
        firstSuperTankSpawnOccurredRef.current = false;
        setEnemyMoney(prevMoney => {
            const { updatedMoney, newUnits } = triggerEnemyBurstSpawn(now, now, prevMoney);
            if (newUnits.length > 0) setEnemyUnits(prevUnits => [...prevUnits, ...newUnits]);
            return updatedMoney;
        });
        lastEnemyBurstTimeRef.current = now;
        lastVictoryFireworkTimeRef.current = now;
    });
  }, []);

  useEffect(() => {
    if (gamePhase === 'GAME_OVER' && gamePhaseRef.current !== 'VICTORY') return;
    let animationFrameId: number;
    const gameLoop = (currentTime: number) => {
      if (gamePhaseRef.current === 'GAME_OVER') { if (animationFrameId) cancelAnimationFrame(animationFrameId); return; }
      const deltaTime = (currentTime - lastUpdateTimeRef.current) / 1000;
      lastUpdateTimeRef.current = currentTime;
      let currentTowersLocal = [...towers]; let currentPlayerUnitsLocal = [...playerUnits];
      let currentEnemyUnitsLocal = [...enemyUnits]; let currentUnitProjectilesLocal = [...unitProjectiles];
      let currentParticlesLocal = [...particles]; 
      let currentActiveFireAreasLocal = [...activeFireAreas];
      let currentPlayerBaseHealthLocal = playerBaseHealth; let currentEnemyBaseHealthLocal = enemyBaseHealth;
      let currentMoneyLocal = money; let currentEnemyMoneyLocal = enemyMoney;
      let currentDetectedByPlayer = new Set<string>(); let currentDetectedByEnemy = new Set<string>();

      if (gamePhaseRef.current === 'VICTORY') {
        if (currentTime - lastVictoryFireworkTimeRef.current > VICTORY_FIREWORK_INTERVAL_MS) {
          const numBursts = 1 + Math.floor(Math.random() * 2);
          for (let i = 0; i < numBursts; i++) {
              const spawnX = (Math.random() - 0.5) * FIREWORK_SPAWN_X_RANGE;
              const spawnZ = (GRID_SIZE_Z / 4 - Math.random() * GRID_SIZE_Z / 2) * CELL_SIZE * 0.5 + FIREWORK_SPAWN_Z_RANGE * (Math.random()-0.5);
              const burstPosition: Vector3D = { x: spawnX, y: FIREWORK_SPAWN_Y + (Math.random() - 0.5) * CELL_SIZE * 2, z: spawnZ };
             currentParticlesLocal.push(...createFireworkBurstParticles(burstPosition, currentTime)); 
             playSound(SOUND_KEYS.FIREWORK_EXPLODE, 0.6);
          }
          lastVictoryFireworkTimeRef.current = currentTime;
        }
      }

      if (gamePhaseRef.current === 'ACTIVE_COMBAT') {
        currentPlayerUnitsLocal.forEach(pUnit => {
            if (pUnit.health <= 0) return; const pUnitSpec = UNIT_SPECS[pUnit.type];
            currentEnemyUnitsLocal.forEach(eUnit => { if (eUnit.health > 0 && distance3D(pUnit.position, eUnit.position) <= pUnitSpec.detectionRange) currentDetectedByPlayer.add(eUnit.id); });
            if (distance3D(pUnit.position, enemyBaseCenterPositionRef.current) <= pUnitSpec.detectionRange) currentDetectedByPlayer.add(ENEMY_BASE_ID);
        });
        currentTowersLocal.forEach(tower => {
            currentEnemyUnitsLocal.forEach(eUnit => { if (eUnit.health > 0 && distance3D(tower.position, eUnit.position) <= TOWER_DETECTION_RANGE) currentDetectedByPlayer.add(eUnit.id); });
            if (distance3D(tower.position, enemyBaseCenterPositionRef.current) <= TOWER_DETECTION_RANGE) currentDetectedByPlayer.add(ENEMY_BASE_ID);
        });
        currentEnemyUnitsLocal.forEach(eUnit => {
            if (eUnit.health <= 0) return; const eUnitSpec = UNIT_SPECS[eUnit.type];
            currentPlayerUnitsLocal.forEach(pUnit => { if (pUnit.health > 0 && distance3D(eUnit.position, pUnit.position) <= eUnitSpec.detectionRange) currentDetectedByEnemy.add(pUnit.id); });
            if (distance3D(eUnit.position, playerBaseCenterPositionRef.current) <= eUnitSpec.detectionRange) currentDetectedByEnemy.add(PLAYER_BASE_ID);
        });
        currentEnemyMoneyLocal += ENEMY_MONEY_INCREASE_RATE * deltaTime;
        if (currentTime - lastEnemyBurstTimeRef.current >= ENEMY_SPAWN_BURST_INTERVAL_MS) {
           const { updatedMoney, newUnits } = triggerEnemyBurstSpawn(currentTime, gameStartTimeRef.current, currentEnemyMoneyLocal);
            currentEnemyMoneyLocal = updatedMoney; if (newUnits.length > 0) currentEnemyUnitsLocal = [...currentEnemyUnitsLocal, ...newUnits];
            lastEnemyBurstTimeRef.current = currentTime;
        }
        const activeSuperTanks = currentEnemyUnitsLocal.filter(u => u.type === UnitType.SUPER_TANK && u.health > 0).length;
        const timeSinceCombatStart = gameStartTimeRef.current ? currentTime - gameStartTimeRef.current : 0;
        if (activeSuperTanks < MAX_ACTIVE_SUPER_TANKS) {
            let attemptSpawnSuperTank = false;
            if (!firstSuperTankSpawnOccurredRef.current && timeSinceCombatStart > SUPER_TANK_SPAWN_TIME_THRESHOLD_MS) { attemptSpawnSuperTank = true; firstSuperTankSpawnOccurredRef.current = true; lastSuperTankSpawnAttemptTimeRef.current = currentTime; }
            else if (firstSuperTankSpawnOccurredRef.current && currentTime - lastSuperTankSpawnAttemptTimeRef.current > SUPER_TANK_SPAWN_INTERVAL_MS) attemptSpawnSuperTank = true;
            if (attemptSpawnSuperTank) {
                if (Math.random() < SUPER_TANK_SPAWN_PROBABILITY) {
                    const unitSpecToSpawn = UNIT_SPECS[UnitType.SUPER_TANK]; const spawnGridX = Math.floor(Math.random() * GRID_SIZE_X);
                    const spawnWorldX = spawnGridX * CELL_SIZE - GRID_HALF_WIDTH + CELL_SIZE / 2;
                    const enemyBaseWorldZ = (ENEMY_BASE_GRID_Z * CELL_SIZE) - GRID_HALF_DEPTH + (CELL_SIZE / 2);
                    const spawnWorldZ = enemyBaseWorldZ + CELL_SIZE;
                    const unitModelHeight = TANK_BODY_HEIGHT * (unitSpecToSpawn.visualScale || 1);
                    const newSuperTank: GameUnit = { id: generateId(), type: UnitType.SUPER_TANK, owner: 'ENEMY', position: { x: spawnWorldX, y: GROUND_LEVEL_Y + unitModelHeight / 2, z: spawnWorldZ }, health: unitSpecToSpawn.health, targetId: PLAYER_BASE_ID, rotationY: 0, lastAttackTime: 0, };
                    currentEnemyUnitsLocal.push(newSuperTank);
                }
                lastSuperTankSpawnAttemptTimeRef.current = currentTime;
            }
        }
        if (currentPlayerBaseHealthLocal < PLAYER_BASE_INITIAL_HEALTH && currentPlayerBaseHealthLocal > 0) {
            const potentialRegenThisFrame = BASE_AUTO_REGEN_RATE_PER_SECOND * deltaTime; const actualRegenPossible = Math.min(potentialRegenThisFrame, PLAYER_BASE_INITIAL_HEALTH - currentPlayerBaseHealthLocal);
            const costForRegen = actualRegenPossible * BASE_REPAIR_COST_PER_HP;
            if (currentMoneyLocal >= costForRegen) { currentMoneyLocal -= costForRegen; currentPlayerBaseHealthLocal += actualRegenPossible; }
            else { const affordableHp = currentMoneyLocal / BASE_REPAIR_COST_PER_HP; if (affordableHp > 0) { const actualAffordableRegen = Math.min(affordableHp, actualRegenPossible); currentMoneyLocal -= actualAffordableRegen * BASE_REPAIR_COST_PER_HP; currentPlayerBaseHealthLocal += actualAffordableRegen; }}
            currentPlayerBaseHealthLocal = Math.min(PLAYER_BASE_INITIAL_HEALTH, currentPlayerBaseHealthLocal);
        }
        if (currentEnemyBaseHealthLocal < ENEMY_BASE_INITIAL_HEALTH && currentEnemyBaseHealthLocal > 0) {
            const potentialRegenThisFrame = BASE_AUTO_REGEN_RATE_PER_SECOND * deltaTime; const actualRegenPossible = Math.min(potentialRegenThisFrame, ENEMY_BASE_INITIAL_HEALTH - currentEnemyBaseHealthLocal);
            const costForRegen = actualRegenPossible * BASE_REPAIR_COST_PER_HP;
            if (currentEnemyMoneyLocal >= costForRegen) { currentEnemyMoneyLocal -= costForRegen; currentEnemyBaseHealthLocal += actualRegenPossible; }
            else { const affordableHp = currentEnemyMoneyLocal / BASE_REPAIR_COST_PER_HP; if (affordableHp > 0) { const actualAffordableRegen = Math.min(affordableHp, actualRegenPossible); currentEnemyMoneyLocal -= actualAffordableRegen * BASE_REPAIR_COST_PER_HP; currentEnemyBaseHealthLocal += actualAffordableRegen; }}
            currentEnemyBaseHealthLocal = Math.min(ENEMY_BASE_INITIAL_HEALTH, currentEnemyBaseHealthLocal);
        }
        const newActiveFireAreas: FireArea[] = [];
        currentActiveFireAreasLocal.forEach(area => {
            const unitsToDamage = area.owner === 'PLAYER' ? currentEnemyUnitsLocal : currentPlayerUnitsLocal;
            unitsToDamage.forEach(unit => {
                if (unit.health > 0 && distance3D(unit.position, area.position) < area.radius) {
                    const damageThisFrame = area.damagePerSecond * deltaTime; const oldHealth = unit.health; unit.health -= damageThisFrame;
                    if (oldHealth > 0 && unit.health > 0) {
                        if (currentTime - (unit.lastFireDamageSoundTimeMs || 0) > FIRE_AREA_HIT_SOUND_INTERVAL_MS) {
                           playSound(area.owner === 'PLAYER' ? SOUND_KEYS.UNIT_HIT_ENEMY : SOUND_KEYS.UNIT_HIT_PLAYER, 0.2);
                           unit.lastFireDamageSoundTimeMs = currentTime;
                        }
                    }
                    if (unit.health <= 0) {
                        if (area.owner === 'PLAYER') { currentMoneyLocal += UNIT_SPECS[unit.type].value; playSound(SOUND_KEYS.UNIT_DEATH_ENEMY, 0.5); currentParticlesLocal.push(...createExplosionParticles(unit.position, PARTICLE_COLOR_ENEMY_DEATH, currentTime)); } 
                        else { playSound(SOUND_KEYS.UNIT_DEATH_PLAYER, 0.5); currentParticlesLocal.push(...createExplosionParticles(unit.position, PARTICLE_COLOR_PLAYER_DEATH, currentTime)); } 
                    }
                }
            });
            const spawnRateThisFrame = FIRE_PARTICLE_SPAWN_RATE_PER_AREA_PER_SECOND * deltaTime;
            const numParticlesToSpawn = Math.floor(spawnRateThisFrame) + (Math.random() < (spawnRateThisFrame % 1) ? 1 : 0);
            for (let i = 0; i < numParticlesToSpawn; i++) {
                const newFireParticle = createSingleFireParticleAndActivate(area.position, area.radius, currentTime);
                if (newFireParticle) currentParticlesLocal.push(newFireParticle);
            }
            if (currentTime - area.startTime <= area.durationMs) newActiveFireAreas.push(area);
        });
        currentActiveFireAreasLocal = newActiveFireAreas;
      }
      
      const processUnits = ( unitsToProcess: GameUnit[], allFriendlyUnitsForFaction: GameUnit[], allOpposingUnitsForFaction: GameUnit[], opposingBasePos: Vector3D, opposingBaseId: string, factionDetectionSet: Set<string>, currentDeltaTime: number ) => {
        const updatedUnits: GameUnit[] = [];
        unitsToProcess.forEach(unit => {
            if (unit.health <= 0) return;
            const unitSpec = UNIT_SPECS[unit.type]; let finalTargetPos: Vector3D | null = null; let finalTargetId: string | null = null;
            unit.isAttacking = false; let isRepairTask = false;
            if (unit.type === UnitType.INFANTRY || unit.type === UnitType.GRENADIER) {
                if (unit.health < unitSpec.health) unit.health = Math.min(unitSpec.health, unit.health + INFANTRY_SELF_REGEN_RATE * currentDeltaTime);
                let bestRepairTarget: GameUnit | null = null; let minDistanceToRepairTarget = INFANTRY_REPAIR_DETECTION_RANGE;
                allFriendlyUnitsForFaction.forEach(friendlyUnit => {
                    if (friendlyUnit.id === unit.id || friendlyUnit.health <= 0) return; const friendlySpec = UNIT_SPECS[friendlyUnit.type];
                    if (friendlyUnit.health < friendlySpec.health && (friendlyUnit.type === UnitType.LIGHT_TANK || friendlyUnit.type === UnitType.HEAVY_TANK || friendlyUnit.type === UnitType.SUPER_TANK || friendlyUnit.type === UnitType.ARTILLERY)) {
                        const distToFriendly = distance3D(unit.position, friendlyUnit.position);
                        if (distToFriendly < minDistanceToRepairTarget) { minDistanceToRepairTarget = distToFriendly; bestRepairTarget = friendlyUnit; }
                    }
                });
                if (bestRepairTarget) { finalTargetPos = bestRepairTarget.position; finalTargetId = bestRepairTarget.id; isRepairTask = true; }
            }
            if (!finalTargetId) {
                let bestTargetToAttack: GameUnit | null = null; let minDistanceToAttackTarget = Infinity;
                let bestTargetToMoveTo: GameUnit | null = null; let minDistanceToMoveTarget = Infinity;
                allOpposingUnitsForFaction.forEach(opUnit => {
                    if (opUnit.health <= 0 || !factionDetectionSet.has(opUnit.id)) return;
                    const distToOpUnit = distance3D(unit.position, opUnit.position);
                    if (distToOpUnit <= unitSpec.attackRange) { if (distToOpUnit < minDistanceToAttackTarget) { minDistanceToAttackTarget = distToOpUnit; bestTargetToAttack = opUnit; } }
                    if (distToOpUnit < minDistanceToMoveTarget) { minDistanceToMoveTarget = distToOpUnit; bestTargetToMoveTo = opUnit; }
                });
                if (bestTargetToAttack) { finalTargetPos = bestTargetToAttack.position; finalTargetId = bestTargetToAttack.id; unit.isAttacking = true; }
                else if (bestTargetToMoveTo) { finalTargetPos = bestTargetToMoveTo.position; finalTargetId = bestTargetToMoveTo.id; }
                else {
                    const unitIsPlayer = unit.owner === 'PLAYER';
                    const enemyBaseRowCenterLineZ = (ENEMY_BASE_GRID_Z * CELL_SIZE) - GRID_HALF_DEPTH + (CELL_SIZE / 2);
                    const playerBaseRowCenterLineZ = (PLAYER_BASE_POSITION_GRID_Z * CELL_SIZE) - GRID_HALF_DEPTH + (CELL_SIZE / 2);
                    let switchToBaseCenterTargeting = false;
                    if (unitIsPlayer) { if (unit.position.z < enemyBaseRowCenterLineZ + (4 * CELL_SIZE)) switchToBaseCenterTargeting = true; }
                    else { if (unit.position.z > playerBaseRowCenterLineZ - (4 * CELL_SIZE)) switchToBaseCenterTargeting = true; }
                    if (switchToBaseCenterTargeting) {
                        finalTargetPos = opposingBasePos; finalTargetId = opposingBaseId;
                        if (factionDetectionSet.has(opposingBaseId) && distance3D(unit.position, opposingBasePos) <= unitSpec.attackRange) unit.isAttacking = true;
                    } else {
                        finalTargetPos = { x: unit.position.x, y: unit.position.y, z: unitIsPlayer ? enemyBaseRowCenterLineZ : playerBaseRowCenterLineZ };
                        finalTargetId = opposingBaseId;
                    }
                }
            }
            unit.targetId = finalTargetId;
            if (finalTargetPos) { const dx = finalTargetPos.x - unit.position.x; const dz = finalTargetPos.z - unit.position.z; unit.rotationY = (dx === 0 && dz === 0) ? unit.rotationY : Math.atan2(dx, dz); }
            const distToFinalTarget = finalTargetPos ? distance3D(unit.position, finalTargetPos) : Infinity;
            const effectiveStoppingDistance = isRepairTask ? (INFANTRY_REPAIR_EFFECT_RANGE * 0.7) : (CELL_SIZE * 0.1);
            if (unit.isAttacking) {
                if (finalTargetPos && finalTargetId && distToFinalTarget <= unitSpec.attackRange && (currentTime - (unit.lastAttackTime || 0) > 1000 / unitSpec.fireRate)) {
                    unit.lastAttackTime = currentTime;
                    if (unit.type === UnitType.ARTILLERY) playSound(SOUND_KEYS.CANNON_FIRE, 0.7);
                    else if (unit.type === UnitType.LIGHT_TANK || unit.type === UnitType.HEAVY_TANK || unit.type === UnitType.SUPER_TANK) playSound(SOUND_KEYS.TANK_FIRE, 0.6);
                    else if (unit.type === UnitType.INFANTRY) playSound(SOUND_KEYS.INFANTRY_FIRE, 0.4);
                    else if (unit.type === UnitType.GRENADIER) { /* Grenade launch sound handled by explosion */ }

                    let barrelForwardOffset = 0; let barrelHorizontalSpread = 0;
                    if (unit.type === UnitType.LIGHT_TANK || unit.type === UnitType.HEAVY_TANK) barrelForwardOffset = TANK_TURRET_RADIUS * 0.5 + TANK_BARREL_LENGTH / 2;
                    else if (unit.type === UnitType.INFANTRY || unit.type === UnitType.GRENADIER) barrelForwardOffset = INFANTRY_BODY_DEPTH / 2 + CELL_SIZE * 0.1;
                    else if (unit.type === UnitType.ARTILLERY) barrelForwardOffset = ARTILLERY_CHASSIS_DEPTH / 2 + CELL_SIZE * 0.2;
                    else if (unit.type === UnitType.SUPER_TANK) { barrelForwardOffset = (TANK_TURRET_RADIUS * 0.5 + TANK_BARREL_LENGTH / 2) * (unitSpec.visualScale || 1); barrelHorizontalSpread = (TANK_TURRET_RADIUS * 0.3) * (unitSpec.visualScale || 1) ; }
                    const projectileBaseY = unit.position.y + unitSpec.barrelOffsetY * (unitSpec.visualScale || 1);
                    const aimTargetY = finalTargetPos.y;
                    const createSingleProjectile = (offsetX: number, offsetZ: number, targetOverride?: Vector3D) => {
                        const effectiveTargetPos = targetOverride || finalTargetPos!; const projectileStartPos: Vector3D = { x: unit.position.x + offsetX, y: projectileBaseY, z: unit.position.z + offsetZ, };
                        let projectileVelocity: Vector3D;
                        if (unit.type === UnitType.GRENADIER) {
                            const dxGrenade = effectiveTargetPos.x - projectileStartPos.x; const dzGrenade = effectiveTargetPos.z - projectileStartPos.z;
                            const timeToTargetGrenade = GRENADE_TIME_TO_TARGET_APPROX;
                            const velXGrenade = dxGrenade / timeToTargetGrenade; const velZGRENADE = dzGrenade / timeToTargetGrenade;
                            const startYGrenade = projectileStartPos.y; const targetYGrenade = GROUND_LEVEL_Y + CELL_SIZE * 0.1;
                            const velYGrenade = (targetYGrenade - startYGrenade) / timeToTargetGrenade + 0.5 * PROJECTILE_GRAVITY * timeToTargetGrenade;
                            projectileVelocity = { x: velXGrenade, y: velYGrenade, z: velZGRENADE };
                        } else {
                            const pDirX = effectiveTargetPos.x - projectileStartPos.x; const pDirY = aimTargetY - projectileStartPos.y; const pDirZ = effectiveTargetPos.z - projectileStartPos.z;
                            const pMag = Math.sqrt(pDirX**2 + pDirY**2 + pDirZ**2) || 1;
                            projectileVelocity = { x: (pDirX / pMag) * UNIT_PROJECTILE_SPEED, y: (pDirY / pMag) * UNIT_PROJECTILE_SPEED, z: (pDirZ / pMag) * UNIT_PROJECTILE_SPEED, };
                        }
                        currentUnitProjectilesLocal.push({ id: generateId(), owner: unit.owner, firerId: unit.id, projectileType: unit.type, position: projectileStartPos, velocity: projectileVelocity, creationTime: currentTime, targetPosition: (unit.type === UnitType.ARTILLERY) ? { ...effectiveTargetPos } : undefined, });
                    };
                    if (unit.type === UnitType.SUPER_TANK) {
                        const rotY = unit.rotationY || 0; const barrel1OffsetX = Math.sin(rotY) * barrelForwardOffset + Math.cos(rotY) * barrelHorizontalSpread; const barrel1OffsetZ = Math.cos(rotY) * barrelForwardOffset - Math.sin(rotY) * barrelHorizontalSpread; createSingleProjectile(barrel1OffsetX, barrel1OffsetZ);
                        const barrel2OffsetX = Math.sin(rotY) * barrelForwardOffset - Math.cos(rotY) * barrelHorizontalSpread; const barrel2OffsetZ = Math.cos(rotY) * barrelForwardOffset + Math.sin(rotY) * barrelHorizontalSpread; createSingleProjectile(barrel2OffsetX, barrel2OffsetZ);
                    } else { const barrelWorldOffsetX = Math.sin(unit.rotationY || 0) * barrelForwardOffset; const barrelWorldOffsetZ = Math.cos(unit.rotationY || 0) * barrelForwardOffset; createSingleProjectile(barrelWorldOffsetX, barrelWorldOffsetZ); }
                }
            } else {
                if (finalTargetPos && finalTargetId && distToFinalTarget > effectiveStoppingDistance) {
                    const direction = { x: finalTargetPos.x - unit.position.x, y: 0, z: finalTargetPos.z - unit.position.z }; const distToMove = Math.sqrt(direction.x**2 + direction.z**2);
                    if (distToMove > 0) { const normDir = { x: direction.x / distToMove, z: direction.z / distToMove }; unit.position = { x: unit.position.x + normDir.x * unitSpec.speed * currentDeltaTime, y: unit.position.y, z: unit.position.z + normDir.z * unitSpec.speed * currentDeltaTime, }; }
                }
            }
            updatedUnits.push(unit);
        });
        return updatedUnits;
      };

      if (gamePhaseRef.current === 'ACTIVE_COMBAT') {
        currentPlayerUnitsLocal = processUnits(currentPlayerUnitsLocal, currentPlayerUnitsLocal, currentEnemyUnitsLocal, enemyBaseCenterPositionRef.current, ENEMY_BASE_ID, currentDetectedByPlayer, deltaTime);
        currentEnemyUnitsLocal = processUnits(currentEnemyUnitsLocal, currentEnemyUnitsLocal, currentPlayerUnitsLocal, playerBaseCenterPositionRef.current, PLAYER_BASE_ID, currentDetectedByEnemy, deltaTime);
        const applyVehicleRegen = (unitsToRegen: GameUnit[], friendlyInfantry: GameUnit[], currentDeltaTime: number) => {
            unitsToRegen.forEach(vehicle => {
                if (vehicle.health <= 0) return; const vehicleSpec = UNIT_SPECS[vehicle.type];
                if (vehicle.health < vehicleSpec.health && (vehicle.type === UnitType.LIGHT_TANK || vehicle.type === UnitType.HEAVY_TANK || vehicle.type === UnitType.SUPER_TANK || vehicle.type === UnitType.ARTILLERY)) {
                    let nearbyInfantryCount = 0;
                    friendlyInfantry.forEach(inf => { if ((inf.type === UnitType.INFANTRY || inf.type === UnitType.GRENADIER) && inf.health > 0 && distance3D(vehicle.position, inf.position) <= INFANTRY_REPAIR_EFFECT_RANGE) nearbyInfantryCount++; });
                    if (nearbyInfantryCount > 0) { const regenRate = Math.min(MAX_VEHICLE_REGEN_FROM_INFANTRY_RATE, nearbyInfantryCount * VEHICLE_REGEN_PER_INFANTRY_RATE); vehicle.health = Math.min(vehicleSpec.health, vehicle.health + regenRate * currentDeltaTime); }
                }
            });
        };
        applyVehicleRegen(currentPlayerUnitsLocal, currentPlayerUnitsLocal, deltaTime);
        applyVehicleRegen(currentEnemyUnitsLocal, currentEnemyUnitsLocal, deltaTime);
      }

      let playerBaseDamageThisFrame = 0; let enemyBaseDamageThisFrame = 0;
      currentUnitProjectilesLocal.forEach(p => {
        if (p.owner === 'PLAYER' && p.projectileType === TowerType.LASER && p.laserEndTime && currentTime < p.laserEndTime) {
          const towerOwner = currentTowersLocal.find(t => t.id === p.firerId); if (!towerOwner) return; const towerSpec = TOWER_SPECS[towerOwner.type]; if (!towerSpec) return;
          const damageThisFrame = towerSpec.damage * towerSpec.fireRate * deltaTime; const laserStartPos = p.position; const laserEndPos = p.targetPosition; if (!laserEndPos) return;
          currentEnemyUnitsLocal.forEach((enemyUnit, enemyIndex) => {
            if (enemyUnit.health <= 0 || !currentDetectedByPlayer.has(enemyUnit.id)) return;
            const enemyUnitSpec = UNIT_SPECS[enemyUnit.type]; let enemyVisualWidth = TANK_BODY_WIDTH;
            if (enemyUnit.type === UnitType.INFANTRY || enemyUnit.type === UnitType.GRENADIER) enemyVisualWidth = INFANTRY_BODY_WIDTH; else if (enemyUnit.type === UnitType.ARTILLERY) enemyVisualWidth = ARTILLERY_CHASSIS_WIDTH;
            const enemyRadius = (enemyVisualWidth / 2) * (enemyUnitSpec.visualScale || 1); const distToBeam = distanceToLineSegment(enemyUnit.position, laserStartPos, laserEndPos);
            if (distToBeam < (LASER_BEAM_WIDTH / 2) + enemyRadius) {
              const oldHealth = currentEnemyUnitsLocal[enemyIndex].health; currentEnemyUnitsLocal[enemyIndex].health -= damageThisFrame;
              if (oldHealth > 0 && currentEnemyUnitsLocal[enemyIndex].health > 0) { if (currentTime - (p.lastHitSoundTime || 0) > LASER_HIT_SOUND_INTERVAL_MS) { playSound(SOUND_KEYS.UNIT_HIT_ENEMY, 0.3); p.lastHitSoundTime = currentTime; } }
              if (currentEnemyUnitsLocal[enemyIndex].health <= 0) { currentMoneyLocal += UNIT_SPECS[currentEnemyUnitsLocal[enemyIndex].type].value; currentParticlesLocal.push(...createExplosionParticles(currentEnemyUnitsLocal[enemyIndex].position, PARTICLE_COLOR_ENEMY_DEATH, currentTime)); playSound(SOUND_KEYS.UNIT_DEATH_ENEMY, 0.5); } 
            }
          });
        }
      });
      const remainingUnitProjectiles: UnitProjectile[] = [];
      currentUnitProjectilesLocal.forEach(p => {
        if (p.projectileType !== TowerType.LASER && (currentTime - p.creationTime > UNIT_PROJECTILE_LIFESPAN)) {
          if (p.projectileType === UnitType.GRENADIER) {
            const grenadierSpec = UNIT_SPECS[UnitType.GRENADIER]; playSound(SOUND_KEYS.GRENADE_EXPLODE, 0.8); currentParticlesLocal.push(...createExplosionParticles(p.position, PARTICLE_COLOR_CANNON, currentTime)); 
            if (grenadierSpec.aoeRadius && grenadierSpec.aoeRadius > 0) {
                const unitsToDamage = p.owner === 'PLAYER' ? currentEnemyUnitsLocal : currentPlayerUnitsLocal;
                unitsToDamage.forEach(targetUnit => {
                    if (targetUnit.health > 0 && distance3D(p.position, targetUnit.position) < grenadierSpec.aoeRadius!) {
                        const oldHealth = targetUnit.health; targetUnit.health -= grenadierSpec.projectileDamage; if (oldHealth > 0 && targetUnit.health > 0) playSound(p.owner === 'PLAYER' ? SOUND_KEYS.UNIT_HIT_ENEMY : SOUND_KEYS.UNIT_HIT_PLAYER, 0.2);
                        if (targetUnit.health <= 0) { if (p.owner === 'PLAYER') currentMoneyLocal += UNIT_SPECS[targetUnit.type].value; currentParticlesLocal.push(...createExplosionParticles(targetUnit.position, p.owner === 'PLAYER' ? PARTICLE_COLOR_ENEMY_DEATH : PARTICLE_COLOR_PLAYER_DEATH, currentTime)); playSound(p.owner === 'PLAYER' ? SOUND_KEYS.UNIT_DEATH_ENEMY : SOUND_KEYS.UNIT_DEATH_PLAYER, 0.5); } 
                    }
                });
            }
            currentActiveFireAreasLocal.push({ id: generateId(), owner: p.owner, position: {x: p.position.x, y: GROUND_LEVEL_Y, z: p.position.z}, radius: grenadierSpec.areaEffectRadius!, durationMs: grenadierSpec.areaEffectDurationMs!, damagePerSecond: grenadierSpec.areaEffectDamagePerSecond!, startTime: currentTime });
          } return;
        }
        if (p.projectileType === TowerType.LASER) { if (p.laserEndTime && currentTime < p.laserEndTime) remainingUnitProjectiles.push({ ...p }); return; }
        
        let nextPos = { ...p.position };
        let explosionOccurred = false; 

        if (p.projectileType === UnitType.GRENADIER) { 
            p.velocity.y -= PROJECTILE_GRAVITY * deltaTime; 
            nextPos.x += p.velocity.x * deltaTime; 
            nextPos.y += p.velocity.y * deltaTime; 
            nextPos.z += p.velocity.z * deltaTime; 
            if (nextPos.y <= GROUND_LEVEL_Y + CELL_SIZE * 0.1 && !explosionOccurred) { 
                explosionOccurred = true; 
                nextPos.y = GROUND_LEVEL_Y + CELL_SIZE * 0.1; 
                const grenadierSpec = UNIT_SPECS[UnitType.GRENADIER];
                playSound(SOUND_KEYS.GRENADE_EXPLODE, 0.8);
                currentParticlesLocal.push(...createExplosionParticles(nextPos, PARTICLE_COLOR_CANNON, currentTime)); 
                if (grenadierSpec.aoeRadius && grenadierSpec.aoeRadius > 0) {
                    const unitsToDamage = p.owner === 'PLAYER' ? currentEnemyUnitsLocal : currentPlayerUnitsLocal;
                    unitsToDamage.forEach(targetUnit => {
                        if (targetUnit.health > 0 && distance3D(nextPos, targetUnit.position) < grenadierSpec.aoeRadius!) {
                            const oldHealth = targetUnit.health; targetUnit.health -= grenadierSpec.projectileDamage;
                            if (oldHealth > 0 && targetUnit.health > 0) playSound(p.owner === 'PLAYER' ? SOUND_KEYS.UNIT_HIT_ENEMY : SOUND_KEYS.UNIT_HIT_PLAYER, 0.2);
                            if (targetUnit.health <= 0) {
                                if (p.owner === 'PLAYER') currentMoneyLocal += UNIT_SPECS[targetUnit.type].value;
                                currentParticlesLocal.push(...createExplosionParticles(targetUnit.position, p.owner === 'PLAYER' ? PARTICLE_COLOR_ENEMY_DEATH : PARTICLE_COLOR_PLAYER_DEATH, currentTime)); 
                                playSound(p.owner === 'PLAYER' ? SOUND_KEYS.UNIT_DEATH_ENEMY : SOUND_KEYS.UNIT_DEATH_PLAYER, 0.5);
                            }
                        }
                    });
                }
                currentActiveFireAreasLocal.push({ id: generateId(), owner: p.owner, position: {x: nextPos.x, y: GROUND_LEVEL_Y, z: nextPos.z}, radius: grenadierSpec.areaEffectRadius!, durationMs: grenadierSpec.areaEffectDurationMs!, damagePerSecond: grenadierSpec.areaEffectDamagePerSecond!, startTime: currentTime });
            }
        } else { 
            nextPos.x += p.velocity.x * deltaTime; nextPos.y += p.velocity.y * deltaTime; nextPos.z += p.velocity.z * deltaTime;
        }
        
        let hit = explosionOccurred; 

        if (!explosionOccurred) { 
            const firerSpec = p.projectileType in UnitType ? UNIT_SPECS[p.projectileType as UnitType] : (p.projectileType in TowerType ? TOWER_SPECS[p.projectileType as TowerType] : null);
            const damageToDeal = firerSpec ? ( (p.projectileType in UnitType) ? (firerSpec as UnitStatsType).projectileDamage : (firerSpec as TowerStats).damage ) : 1;
            const aoeRadius = (p.projectileType === TowerType.CANNON && TOWER_SPECS[TowerType.CANNON].aoeRadius) ? TOWER_SPECS[TowerType.CANNON].aoeRadius : (p.projectileType === UnitType.ARTILLERY && UNIT_SPECS[UnitType.ARTILLERY].aoeRadius) ? UNIT_SPECS[UnitType.ARTILLERY].aoeRadius : 0;
            const projectileActualRadius = getProjectileRadius(p.projectileType); const hitboxDivisor = 1.8;

            if (p.owner === 'PLAYER') {
                let directHitEnemyIndex = -1;
                for(let i=0; i < currentEnemyUnitsLocal.length; i++) {
                    const enemy = currentEnemyUnitsLocal[i]; if (enemy.health <= 0) continue; const enemyUnitSpec = UNIT_SPECS[enemy.type]; let enemyBaseDimension: number;
                    switch (enemy.type) { case UnitType.INFANTRY: case UnitType.GRENADIER: enemyBaseDimension = INFANTRY_BODY_WIDTH; break; case UnitType.ARTILLERY: enemyBaseDimension = ARTILLERY_CHASSIS_WIDTH; break; default: enemyBaseDimension = TANK_BODY_WIDTH; break; }
                    const enemyHitboxRadius = (enemyBaseDimension / hitboxDivisor) * (enemyUnitSpec.visualScale || 1);
                    if (distanceToLineSegment(enemy.position, p.position, nextPos) < enemyHitboxRadius + projectileActualRadius) { directHitEnemyIndex = i; break; }
                }
                if (directHitEnemyIndex !== -1) {
                    hit = true; const hitEnemy = currentEnemyUnitsLocal[directHitEnemyIndex]; const oldHealth = hitEnemy.health; hitEnemy.health -= damageToDeal;
                    if (oldHealth > 0 && hitEnemy.health > 0) playSound(SOUND_KEYS.UNIT_HIT_ENEMY, 0.4);
                    if (hitEnemy.health <= 0) { currentMoneyLocal += UNIT_SPECS[hitEnemy.type].value; currentParticlesLocal.push(...createExplosionParticles(hitEnemy.position, PARTICLE_COLOR_ENEMY_DEATH, currentTime)); playSound(SOUND_KEYS.UNIT_DEATH_ENEMY, 0.6); } 
                    
                    if (p.projectileType === UnitType.GRENADIER) {
                        explosionOccurred = true; 
                        const grenadierSpec = UNIT_SPECS[UnitType.GRENADIER];
                        playSound(SOUND_KEYS.GRENADE_EXPLODE, 0.8);
                        currentParticlesLocal.push(...createExplosionParticles(hitEnemy.position, PARTICLE_COLOR_CANNON, currentTime)); 
                        currentActiveFireAreasLocal.push({ id: generateId(), owner: p.owner, position: {x: hitEnemy.position.x, y: GROUND_LEVEL_Y, z: hitEnemy.position.z}, radius: grenadierSpec.areaEffectRadius!, durationMs: grenadierSpec.areaEffectDurationMs!, damagePerSecond: grenadierSpec.areaEffectDamagePerSecond!, startTime: currentTime });
                        if (grenadierSpec.aoeRadius && grenadierSpec.aoeRadius > 0) {
                            currentEnemyUnitsLocal.forEach((aoeTarget, aoeIndex) => {
                                if (aoeTarget.health > 0 && aoeIndex !== directHitEnemyIndex && distance3D(hitEnemy.position, aoeTarget.position) < grenadierSpec.aoeRadius) {
                                    const oldAoeHealth = aoeTarget.health; aoeTarget.health -= grenadierSpec.projectileDamage; if (oldAoeHealth > 0 && aoeTarget.health > 0) playSound(SOUND_KEYS.UNIT_HIT_ENEMY, 0.2);
                                    if (aoeTarget.health <= 0) { currentMoneyLocal += UNIT_SPECS[aoeTarget.type].value; currentParticlesLocal.push(...createExplosionParticles(aoeTarget.position, PARTICLE_COLOR_ENEMY_DEATH, currentTime)); playSound(SOUND_KEYS.UNIT_DEATH_ENEMY, 0.5); } 
                                }
                            });
                        }
                    } else if (aoeRadius && aoeRadius > 0) { 
                        const explosionCenter = nextPos; currentParticlesLocal.push(...createExplosionParticles(explosionCenter, PARTICLE_COLOR_CANNON, currentTime)); 
                        if (p.projectileType === TowerType.CANNON || p.projectileType === UnitType.ARTILLERY) playSound(SOUND_KEYS.CANNON_BALL_EXPLODE, 0.7);
                        currentEnemyUnitsLocal.forEach((aoeTarget, aoeIndex) => {
                            if (aoeTarget.health > 0 && aoeIndex !== directHitEnemyIndex && distance3D(explosionCenter, aoeTarget.position) < aoeRadius) {
                                const oldAoeHealth = aoeTarget.health; aoeTarget.health -= damageToDeal; if (oldAoeHealth > 0 && aoeTarget.health > 0) playSound(SOUND_KEYS.UNIT_HIT_ENEMY, 0.2);
                                if (aoeTarget.health <= 0) { currentMoneyLocal += UNIT_SPECS[aoeTarget.type].value; currentParticlesLocal.push(...createExplosionParticles(aoeTarget.position, PARTICLE_COLOR_ENEMY_DEATH, currentTime)); playSound(SOUND_KEYS.UNIT_DEATH_ENEMY, 0.5); } 
                            }
                        });
                    }
                } else { 
                    const enemyBaseHitboxRadius = (ENEMY_BASE_SIZE_CELLS_X * CELL_SIZE) / 2;
                    if (distance3D(nextPos, enemyBaseCenterPositionRef.current) < enemyBaseHitboxRadius + projectileActualRadius) {
                        hit = true; if (currentDetectedByPlayer.has(ENEMY_BASE_ID)) {
                            if (Object.values(UnitType).includes(p.projectileType as UnitType) || Object.values(TowerType).includes(p.projectileType as TowerType) ) {
                                enemyBaseDamageThisFrame += damageToDeal;
                                if ((p.projectileType === UnitType.ARTILLERY || p.projectileType === TowerType.CANNON) && aoeRadius && aoeRadius > 0) {
                                    currentParticlesLocal.push(...createExplosionParticles(nextPos, PARTICLE_COLOR_CANNON, currentTime)); playSound(SOUND_KEYS.CANNON_BALL_EXPLODE, 0.7); 
                                    currentEnemyUnitsLocal.forEach((aoeTarget) => {
                                        if (aoeTarget.health > 0 && distance3D(nextPos, aoeTarget.position) < aoeRadius) {
                                            const oldAoeHealth = aoeTarget.health; aoeTarget.health -= damageToDeal; if (oldAoeHealth > 0 && aoeTarget.health > 0) playSound(SOUND_KEYS.UNIT_HIT_ENEMY, 0.2);
                                            if (aoeTarget.health <= 0) { currentMoneyLocal += UNIT_SPECS[aoeTarget.type].value; currentParticlesLocal.push(...createExplosionParticles(aoeTarget.position, PARTICLE_COLOR_ENEMY_DEATH, currentTime)); playSound(SOUND_KEYS.UNIT_DEATH_ENEMY, 0.5); } 
                                        }
                                    });
                                }
                            }
                        }
                    }
                }
            } else { 
                let directHitPlayerUnitIndex = -1;
                for (let i=0; i < currentPlayerUnitsLocal.length; i++) {
                    const pUnit = currentPlayerUnitsLocal[i]; if (pUnit.health <= 0) continue; const pUnitSpec = UNIT_SPECS[pUnit.type]; let playerUnitBaseDimension: number;
                    switch (pUnit.type) { case UnitType.INFANTRY: case UnitType.GRENADIER: playerUnitBaseDimension = INFANTRY_BODY_WIDTH; break; case UnitType.ARTILLERY: playerUnitBaseDimension = ARTILLERY_CHASSIS_WIDTH; break; default: playerUnitBaseDimension = TANK_BODY_WIDTH; break; }
                    const pUnitHitboxRadius = (playerUnitBaseDimension / hitboxDivisor) * (pUnitSpec.visualScale || 1);
                    if (distanceToLineSegment(pUnit.position, p.position, nextPos) < pUnitHitboxRadius + projectileActualRadius) { directHitPlayerUnitIndex = i; break; }
                }
                if (directHitPlayerUnitIndex !== -1) {
                    hit = true; const hitPlayerUnit = currentPlayerUnitsLocal[directHitPlayerUnitIndex]; const oldHealth = hitPlayerUnit.health; hitPlayerUnit.health -= damageToDeal;
                    if (oldHealth > 0 && hitPlayerUnit.health > 0) playSound(SOUND_KEYS.UNIT_HIT_PLAYER, 0.4);
                    if (hitPlayerUnit.health <= 0) { currentParticlesLocal.push(...createExplosionParticles(hitPlayerUnit.position, PARTICLE_COLOR_PLAYER_DEATH, currentTime)); playSound(SOUND_KEYS.UNIT_DEATH_PLAYER, 0.6); } 
                    
                    if (p.projectileType === UnitType.GRENADIER) {
                        explosionOccurred = true; 
                        const grenadierSpec = UNIT_SPECS[UnitType.GRENADIER];
                        playSound(SOUND_KEYS.GRENADE_EXPLODE, 0.8);
                        currentParticlesLocal.push(...createExplosionParticles(hitPlayerUnit.position, PARTICLE_COLOR_CANNON, currentTime)); 
                        currentActiveFireAreasLocal.push({ id: generateId(), owner: p.owner, position: {x: hitPlayerUnit.position.x, y: GROUND_LEVEL_Y, z: hitPlayerUnit.position.z}, radius: grenadierSpec.areaEffectRadius!, durationMs: grenadierSpec.areaEffectDurationMs!, damagePerSecond: grenadierSpec.areaEffectDamagePerSecond!, startTime: currentTime });
                        if (grenadierSpec.aoeRadius && grenadierSpec.aoeRadius > 0) {
                            currentPlayerUnitsLocal.forEach((aoeTarget, aoeIndex) => {
                                if (aoeTarget.health > 0 && aoeIndex !== directHitPlayerUnitIndex && distance3D(hitPlayerUnit.position, aoeTarget.position) < grenadierSpec.aoeRadius) {
                                    const oldAoeHealth = aoeTarget.health; aoeTarget.health -= grenadierSpec.projectileDamage; if (oldAoeHealth > 0 && aoeTarget.health > 0) playSound(SOUND_KEYS.UNIT_HIT_PLAYER, 0.2);
                                    if (aoeTarget.health <= 0) { currentParticlesLocal.push(...createExplosionParticles(aoeTarget.position, PARTICLE_COLOR_PLAYER_DEATH, currentTime)); playSound(SOUND_KEYS.UNIT_DEATH_PLAYER, 0.5); } 
                                }
                            });
                        }
                    } else if (p.projectileType === UnitType.ARTILLERY && aoeRadius && aoeRadius > 0) { 
                        const explosionCenter = nextPos; currentParticlesLocal.push(...createExplosionParticles(explosionCenter, PARTICLE_COLOR_CANNON, currentTime)); playSound(SOUND_KEYS.CANNON_BALL_EXPLODE, 0.7); 
                        currentPlayerUnitsLocal.forEach((aoeTarget, aoeIndex) => {
                            if (aoeTarget.health > 0 && aoeIndex !== directHitPlayerUnitIndex && distance3D(explosionCenter, aoeTarget.position) < aoeRadius) {
                                const oldAoeHealth = aoeTarget.health; aoeTarget.health -= damageToDeal; if (oldAoeHealth > 0 && aoeTarget.health > 0) playSound(SOUND_KEYS.UNIT_HIT_PLAYER, 0.2);
                                if (aoeTarget.health <= 0) { currentParticlesLocal.push(...createExplosionParticles(aoeTarget.position, PARTICLE_COLOR_PLAYER_DEATH, currentTime)); playSound(SOUND_KEYS.UNIT_DEATH_PLAYER, 0.5); } 
                            }
                        });
                    }
                } else { 
                    const playerBaseHitboxRadius = (PLAYER_BASE_SIZE_CELLS_X * CELL_SIZE) / 2;
                    if (distance3D(nextPos, playerBaseCenterPositionRef.current) < playerBaseHitboxRadius + projectileActualRadius) {
                        hit = true; if (currentDetectedByEnemy.has(PLAYER_BASE_ID)) {
                            playerBaseDamageThisFrame += damageToDeal;
                            if (p.projectileType === UnitType.ARTILLERY && aoeRadius && aoeRadius > 0) {
                                currentParticlesLocal.push(...createExplosionParticles(nextPos, PARTICLE_COLOR_CANNON, currentTime)); playSound(SOUND_KEYS.CANNON_BALL_EXPLODE, 0.7); 
                                currentPlayerUnitsLocal.forEach((aoeTarget) => {
                                    if (aoeTarget.health > 0 && distance3D(nextPos, aoeTarget.position) < aoeRadius) {
                                        const oldAoeHealth = aoeTarget.health; aoeTarget.health -= damageToDeal; if (oldAoeHealth > 0 && aoeTarget.health > 0) playSound(SOUND_KEYS.UNIT_HIT_PLAYER, 0.2);
                                        if (aoeTarget.health <= 0) { currentParticlesLocal.push(...createExplosionParticles(aoeTarget.position, PARTICLE_COLOR_PLAYER_DEATH, currentTime)); playSound(SOUND_KEYS.UNIT_DEATH_PLAYER, 0.5); } 
                                    }
                                });
                            }
                        }
                    }
                }
            }
        } 
        if (!hit) remainingUnitProjectiles.push({ ...p, position: nextPos });
      });
      currentUnitProjectilesLocal = remainingUnitProjectiles;

      if (playerBaseDamageThisFrame > 0) {
          if (playerBaseHealth > 0) { 
              playSound(SOUND_KEYS.UNIT_HIT_PLAYER, 0.4);
          }
          currentPlayerBaseHealthLocal = Math.max(0, currentPlayerBaseHealthLocal - playerBaseDamageThisFrame);
      }
      if (enemyBaseDamageThisFrame > 0) {
          if (enemyBaseHealth > 0) { 
              playSound(SOUND_KEYS.UNIT_HIT_ENEMY, 0.4);
          }
          currentEnemyBaseHealthLocal = Math.max(0, currentEnemyBaseHealthLocal - enemyBaseDamageThisFrame);
      }
      
      const nextActiveParticles: Particle[] = [];
      for (const particle of currentParticlesLocal) {
          if (!particle.isActive) continue; 

          const age = currentTime - particle.startTime;
          if (age > particle.maxLife) {
              particle.isActive = false; 
              continue;
          }

          if (particle.hasGravity) particle.velocity.y -= FIREWORK_GRAVITY * deltaTime;
          particle.position.x += particle.velocity.x * deltaTime;
          particle.position.y += particle.velocity.y * deltaTime;
          particle.position.z += particle.velocity.z * deltaTime;
          particle.currentSize = particle.initialSize * Math.max(0, (1 - age / particle.maxLife));
          
          if (particle.currentSize <= 0.01) {
              particle.isActive = false; 
              continue;
          }
          nextActiveParticles.push(particle);
      }
      currentParticlesLocal = nextActiveParticles;
      
      let newGamePhase: GamePhase = gamePhaseRef.current;
      if (gamePhaseRef.current === 'ACTIVE_COMBAT') {
        if (currentPlayerBaseHealthLocal <= 0 && playerBaseHealth > 0) { 
            newGamePhase = 'GAME_OVER'; 
            playSound(SOUND_KEYS.BASE_EXPLOSION_PLAYER); 
        } else if (currentEnemyBaseHealthLocal <= 0 && enemyBaseHealth > 0) { 
            newGamePhase = 'VICTORY'; 
            playSound(SOUND_KEYS.BASE_EXPLOSION_ENEMY); 
        }
      }
      const newTowerProjectiles: UnitProjectile[] = [];
      if (gamePhaseRef.current === 'ACTIVE_COMBAT') {
          currentTowersLocal = currentTowersLocal.map(tower => {
            const towerSpec = TOWER_SPECS[tower.type]; let updatedTower = { ...tower };
            if (currentTime - tower.lastShotTime > 1000 / towerSpec.fireRate && currentEnemyUnitsLocal.filter(e => e.health > 0).length > 0) {
              let target: GameUnit | null = null; let minDistance = towerSpec.range;
              currentEnemyUnitsLocal.forEach(enemyUnit => { if (enemyUnit.health > 0) { const dist = distance3D(tower.position, enemyUnit.position); if (dist < minDistance) { minDistance = dist; target = enemyUnit; } } });
              if (target) {
                if (currentDetectedByPlayer.has(target.id)) {
                    updatedTower.targetId = target.id; updatedTower.lastShotTime = currentTime;
                    if (tower.type === TowerType.MACHINE_GUN) playSound(SOUND_KEYS.MACHINE_GUN_FIRE, 0.5); else if (tower.type === TowerType.CANNON) playSound(SOUND_KEYS.CANNON_FIRE, 0.8);
                    const dx = target.position.x - tower.position.x; const dz = target.position.z - tower.position.z; updatedTower.rotationY = Math.atan2(dx, dz);
                    const projectileStartPosition = { x: tower.position.x, y: tower.position.y + towerSpec.barrelOffsetY, z: tower.position.z };
                    const enemyTargetHeight = UNIT_SPECS[target.type]?.barrelOffsetY || 0;
                    if (tower.type === TowerType.LASER && updatedTower.rotationY !== undefined) { const laserStartOffset = CELL_SIZE * 0.1; projectileStartPosition.x += Math.sin(updatedTower.rotationY) * laserStartOffset; projectileStartPosition.z += Math.cos(updatedTower.rotationY) * laserStartOffset; }
                    if (tower.type === TowerType.MACHINE_GUN || tower.type === TowerType.CANNON) {
                      const direction = { x: target.position.x - projectileStartPosition.x, y: target.position.y + enemyTargetHeight - projectileStartPosition.y, z: target.position.z - projectileStartPosition.z, };
                      const length = Math.sqrt(direction.x**2 + direction.y**2 + direction.z**2) || 1;
                      newTowerProjectiles.push({ id: generateId(), owner: 'PLAYER', firerId: tower.id, projectileType: tower.type, position: projectileStartPosition, velocity: { x: (direction.x / length) * (towerSpec.projectileSpeed || 10), y: (direction.y / length) * (towerSpec.projectileSpeed || 10), z: (direction.z / length) * (towerSpec.projectileSpeed || 10), }, targetPosition: tower.type === TowerType.CANNON ? { ...target.position, y: target.position.y + enemyTargetHeight } : undefined, creationTime: currentTime, });
                    } else if (tower.type === TowerType.LASER) {
                      newTowerProjectiles.push({ id: generateId(), owner: 'PLAYER', firerId: tower.id, projectileType: TowerType.LASER, position: projectileStartPosition, velocity: { x: 0, y: 0, z: 0 }, targetPosition: { ...target.position, y: target.position.y + enemyTargetHeight }, laserEndTime: currentTime + LASER_DURATION, creationTime: currentTime, lastHitSoundTime: 0, });
                    }
                } else updatedTower.targetId = undefined;
              } else updatedTower.targetId = undefined;
            }
            return updatedTower;
          });
          if (newTowerProjectiles.length > 0) currentUnitProjectilesLocal.push(...newTowerProjectiles);
      }
      setTowers(currentTowersLocal); setPlayerUnits(currentPlayerUnitsLocal.filter(u => u.health > 0));
      setEnemyUnits(currentEnemyUnitsLocal.filter(u => u.health > 0)); setUnitProjectiles(currentUnitProjectilesLocal);
      setParticles(currentParticlesLocal); 
      setActiveFireAreas(currentActiveFireAreasLocal);
      setMoney(currentMoneyLocal); setEnemyMoney(currentEnemyMoneyLocal);
      setPlayerBaseHealth(currentPlayerBaseHealthLocal); setEnemyBaseHealth(currentEnemyBaseHealthLocal);
      setDetectedByPlayer(new Set(currentDetectedByPlayer)); setDetectedByEnemy(new Set(currentDetectedByEnemy));
      if (newGamePhase !== gamePhaseRef.current) {
         if ((newGamePhase === 'GAME_OVER' || newGamePhase === 'VICTORY') && bgmSourceNodeRef.current) { 
            bgmSourceNodeRef.current.stop(); 
            bgmSourceNodeRef.current.disconnect();
            bgmSourceNodeRef.current = null; 
         }
        setGamePhase(newGamePhase);
      }
      if (newGamePhase !== 'GAME_OVER') {
        animationFrameId = requestAnimationFrame(gameLoop);
      } else {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      }
    };
    animationFrameId = requestAnimationFrame(gameLoop);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [
    gamePhase, towers, playerUnits, enemyUnits, unitProjectiles, particles, activeFireAreas, 
    money, enemyMoney, playerBaseHealth, enemyBaseHealth, 
    createExplosionParticles, createFireworkBurstParticles, createSingleFireParticleAndActivate,
    activateParticlesFromPool
  ]);

  return (
    <>
      <FullscreenButton />
      <UIManager
        money={money}
        playerBaseHealth={playerBaseHealth}
        enemyBaseHealth={enemyBaseHealth}
        selectedTowerType={selectedTowerType}
        onSelectTowerType={handleSelectTowerType}
        onStartCombat={handleStartCombat}
        onBuildUnit={handleBuildPlayerUnit}
        gamePhase={gamePhase}
      />
      <GameScene
        towers={towers}
        playerUnits={playerUnits}
        enemyUnits={enemyUnits}
        unitProjectiles={unitProjectiles}
        particles={particles} 
        activeFireAreas={activeFireAreas}
        onPlaceTower={handlePlaceTower}
        grid={grid}
        selectedTowerType={selectedTowerType}
        playerBasePosition={playerBaseCenterPositionRef.current}
        enemyBasePosition={enemyBaseCenterPositionRef.current}
        detectedByPlayer={detectedByPlayer}
        detectedByEnemy={detectedByEnemy}
      />
    </>
  );
};
export default App;