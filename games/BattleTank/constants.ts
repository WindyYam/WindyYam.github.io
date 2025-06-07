
import { TowerType, Vector3D, UnitType, UnitStats as UnitStatsInterface } from './types.ts'; // Removed Wave, Added UnitStatsInterface

// export const GRID_SIZE = 10; // Old: 10x10 grid
export const GRID_SIZE_X = 10; // Grid width
export const GRID_SIZE_Z = 30; // Grid depth (length) - Increased from 20

export const CELL_SIZE = 2; // Each cell is 2x2 units in 3D space
export const GROUND_LEVEL_Y = 0; // Y-coordinate for the ground plane and tower bases

export const TOWER_BASE_HEIGHT = 0.2; // Common base height for all towers

// Unit Visual Constants (used by LIGHT_TANK, HEAVY_TANK, INFANTRY)
export const TANK_BODY_WIDTH = CELL_SIZE * 0.7;
export const TANK_BODY_HEIGHT = CELL_SIZE * 0.3;
export const TANK_BODY_DEPTH = CELL_SIZE * 0.9;
export const TANK_TURRET_RADIUS = CELL_SIZE * 0.2;
export const TANK_TURRET_HEIGHT = CELL_SIZE * 0.25;
export const TANK_BARREL_LENGTH = CELL_SIZE * 0.5;
export const TANK_BARREL_RADIUS = CELL_SIZE * 0.05;
export const TANK_TRACK_WIDTH = TANK_BODY_WIDTH * 1.1;
export const TANK_TRACK_HEIGHT = TANK_BODY_HEIGHT * 0.7;
export const TANK_TRACK_DEPTH = TANK_BODY_DEPTH * 1.05;

export const INFANTRY_BODY_WIDTH = CELL_SIZE * 0.25;
export const INFANTRY_BODY_HEIGHT = CELL_SIZE * 0.5;
export const INFANTRY_BODY_DEPTH = CELL_SIZE * 0.2;
export const INFANTRY_HEAD_RADIUS = CELL_SIZE * 0.1;

// Artillery Visual Constants
export const ARTILLERY_CHASSIS_WIDTH = CELL_SIZE * 0.6;
export const ARTILLERY_CHASSIS_HEIGHT = CELL_SIZE * 0.25;
export const ARTILLERY_CHASSIS_DEPTH = CELL_SIZE * 1.0;
export const ARTILLERY_WHEEL_RADIUS = CELL_SIZE * 0.35;
export const ARTILLERY_WHEEL_THICKNESS = CELL_SIZE * 0.1;
export const ARTILLERY_BARREL_LENGTH = CELL_SIZE * 1.2;
export const ARTILLERY_BARREL_RADIUS = CELL_SIZE * 0.1;

// Super Tank Visual Constants
export const SUPER_TANK_SCALE_FACTOR = 1.8;


// Player Base Constants
export const PLAYER_BASE_INITIAL_HEALTH = 1000;
export const PLAYER_BASE_POSITION_GRID_Z = GRID_SIZE_Z - 1; // Adjusted for new GRID_SIZE_Z
export const PLAYER_BASE_SIZE_CELLS_X = 2;
export const PLAYER_BASE_ID = 'PLAYER_BASE_ID';

// Enemy Base Constants
export const ENEMY_BASE_INITIAL_HEALTH = 2000;
export const ENEMY_BASE_GRID_Z = 0; // Stays at the top
export const ENEMY_BASE_SIZE_CELLS_X = 3;
export const ENEMY_BASE_ID = 'ENEMY_BASE_ID';

// Player Unit Spawn Offset (relative to player base center)
export const PLAYER_UNIT_SPAWN_OFFSET_Z = -CELL_SIZE * 1.5;

// Unit Projectile settings
export const UNIT_PROJECTILE_SPEED = 15;
export const UNIT_PROJECTILE_LIFESPAN = 3000; // ms
export const PROJECTILE_GRAVITY = 9.81 * 3.0; // For arcing projectiles like grenades
export const GRENADE_TIME_TO_TARGET_APPROX = 1.0; // seconds, for trajectory calculation


export interface TowerStats {
  cost: number;
  damage: number;
  range: number; // Attack Range
  fireRate: number;
  projectileSpeed?: number;
  aoeRadius?: number;
  color: number;
  modelHeight: number;
  barrelOffsetY: number;
  detectionRange?: number; // Original detection range, now less critical for firing decision
}

export const TOWER_SPECS: Record<TowerType, TowerStats> = {
  [TowerType.MACHINE_GUN]: {
    cost: 100,
    damage: 15,
    range: 7 * CELL_SIZE,
    fireRate: 3,
    projectileSpeed: 20, 
    color: 0x607d8b, 
    modelHeight: CELL_SIZE * 0.8, 
    barrelOffsetY: TOWER_BASE_HEIGHT + (CELL_SIZE * 0.3) + (CELL_SIZE * 0.15),
    detectionRange: 7 * CELL_SIZE, // Will be largely overridden by global TOWER_DETECTION_RANGE for firing
  },
  [TowerType.CANNON]: { 
    cost: 250, 
    damage: 50, 
    range: 6 * CELL_SIZE, 
    fireRate: 0.3, 
    projectileSpeed: 10, 
    aoeRadius: 1.5 * CELL_SIZE, 
    color: 0x4caf50, 
    modelHeight: CELL_SIZE * 0.9, 
    barrelOffsetY: TOWER_BASE_HEIGHT + (CELL_SIZE * 0.15) + (CELL_SIZE * 0.25),
    detectionRange: 7 * CELL_SIZE,
  },
  [TowerType.LASER]: { 
    cost: 400, 
    damage: 4, 
    range: 12 * CELL_SIZE, 
    fireRate: 5, 
    color: 0x2196f3, 
    modelHeight: CELL_SIZE * 1.0, 
    barrelOffsetY: TOWER_BASE_HEIGHT + (CELL_SIZE * 0.5),
    detectionRange: 10.5 * CELL_SIZE,
  },
};

// Re-export UnitStats from types.ts to avoid re-declaration, use it here
export type UnitStats = UnitStatsInterface;

export const UNIT_SPECS: Record<UnitType, Readonly<UnitStats>> = {
  [UnitType.LIGHT_TANK]: { 
    cost: 100,
    health: 100,
    speed: 2.8, 
    value: 50,
    attackRange: CELL_SIZE * 4,
    fireRate: 0.75,
    projectileDamage: 10,
    barrelOffsetY: TANK_BODY_HEIGHT / 2 + TANK_TURRET_HEIGHT / 2,
    color: 0x556b2f, 
    visualScale: 0.85, 
    detectionRange: CELL_SIZE * 3, 
    aoeRadius: 0,
  },
  [UnitType.INFANTRY]: {
    cost: 20,
    health: 30,
    speed: 3,
    value: 10,
    attackRange: CELL_SIZE * 3,
    fireRate: 1,
    projectileDamage: 5,
    barrelOffsetY: INFANTRY_BODY_HEIGHT * 0.3,
    color: 0x8B4513, 
    visualScale: 1.0,
    detectionRange: CELL_SIZE * 6,
    aoeRadius: 0,
  },
  [UnitType.GRENADIER]: {
    cost: 45,
    health: 35,
    speed: 2.7,
    value: 25,
    attackRange: CELL_SIZE * 3, // Shorter range for thrown grenade
    fireRate: 0.33, // Roughly 1 grenade every 3 seconds
    projectileDamage: 15, // Initial impact damage of grenade
    aoeRadius: CELL_SIZE * 0.75, // AOE radius for initial impact
    barrelOffsetY: INFANTRY_BODY_HEIGHT * 0.3, // Same as infantry for launch height
    color: 0x006400, // Dark green
    visualScale: 1.0,
    detectionRange: CELL_SIZE * 5.5,
    areaEffectDurationMs: 2500, // Fire lasts for 2.5 seconds
    areaEffectDamagePerSecond: 10, // Damage per second in the fire
    areaEffectRadius: CELL_SIZE * 0.75, // Fire patch radius (1.5 cell diameter)
  },
  [UnitType.HEAVY_TANK]: {
    cost: 300,
    health: 250,
    speed: 1.5,
    value: 150,
    attackRange: CELL_SIZE * 4,
    fireRate: 0.75,
    projectileDamage: 15,
    barrelOffsetY: TANK_BODY_HEIGHT / 2 + TANK_TURRET_HEIGHT / 2,
    color: 0xcc0000, 
    visualScale: 1.1,
    detectionRange: CELL_SIZE * 3,
    aoeRadius: 0,
  },
  [UnitType.ARTILLERY]: {
    cost: 250,
    health: 70, 
    speed: 1.4, 
    value: 170,
    attackRange: CELL_SIZE * 5.5, 
    fireRate: 0.33, 
    projectileDamage: 50, 
    barrelOffsetY: ARTILLERY_CHASSIS_HEIGHT, // Barrel Y is relative to its own group, which is already positioned.
    color: 0x4B5320, 
    visualScale: 1.0,
    detectionRange: CELL_SIZE * 3, 
    aoeRadius: CELL_SIZE * 1.8, 
  },
  [UnitType.SUPER_TANK]: {
    cost: 0, // Not buildable by enemy in bursts, special spawn
    health: 2000,
    speed: 1.2,
    value: 800, 
    attackRange: CELL_SIZE * 4.5,
    fireRate: 0.6, 
    projectileDamage: 40, 
    barrelOffsetY: (TANK_BODY_HEIGHT / 2 + TANK_TURRET_HEIGHT / 2), // Barrel Y is relative to unit's group which applies scaling
    color: 0x4a004a, 
    visualScale: SUPER_TANK_SCALE_FACTOR,
    detectionRange: CELL_SIZE * 3,
    aoeRadius: 0, 
  },
};

// Enemy Spawn Burst Logic
export const ENEMY_SPAWN_BURST_INTERVAL_MS = 40000; // Time between enemy spawn bursts

export interface BurstUnitComposition {
  type: UnitType;
  count: number; // Desired count if affordable within burst budget (or base for random scaling in endless wave)
}
export interface EnemyBurstTier {
  minTime: number; // Game time in ms after which this burst composition can be used
  units: BurstUnitComposition[];
  maxAffordableCostPercent: number; // Enemy will try to spend up to this % of its current money on this burst
  spawnSpreadFactor?: number; // Optional: 0 to 1, how spread out the burst units are along X. Default 0.9
  isEndlessWave?: boolean; // If true, this wave repeats and unit counts are randomized based on affordability
}

export const ENEMY_BURST_COMPOSITIONS: EnemyBurstTier[] = [
  { // Wave 1
    minTime: 0, 
    units: [
      { type: UnitType.INFANTRY, count: 8 },
      { type: UnitType.GRENADIER, count: 1 },
      { type: UnitType.LIGHT_TANK, count: 2 },
    ],
    maxAffordableCostPercent: 0.85, 
  },
  { // Wave 2
    minTime: 70000, 
    units: [
      { type: UnitType.INFANTRY, count: 10 },
      { type: UnitType.GRENADIER, count: 2 },
      { type: UnitType.LIGHT_TANK, count: 3 },
      { type: UnitType.ARTILLERY, count: 1 },
    ],
    maxAffordableCostPercent: 0.9,
  },
  { // Wave 3
    minTime: 150000, 
    units: [
      { type: UnitType.INFANTRY, count: 8 },
      { type: UnitType.GRENADIER, count: 3 },
      { type: UnitType.LIGHT_TANK, count: 4 },
      { type: UnitType.HEAVY_TANK, count: 1 },
      { type: UnitType.ARTILLERY, count: 2 },
    ],
    maxAffordableCostPercent: 0.95,
    spawnSpreadFactor: 0.7,
  },
   { // Wave 4
    minTime: 240000, 
    units: [
      { type: UnitType.INFANTRY, count: 10 },
      { type: UnitType.GRENADIER, count: 4 },
      { type: UnitType.LIGHT_TANK, count: 3 },
      { type: UnitType.HEAVY_TANK, count: 2 },
      { type: UnitType.ARTILLERY, count: 3 },
    ],
    maxAffordableCostPercent: 1.0,
    spawnSpreadFactor: 0.6,
  },
  { // Wave 5 (New)
    minTime: 320000, // Approx 5m20s
    units: [
      { type: UnitType.INFANTRY, count: 12 },
      { type: UnitType.GRENADIER, count: 4 },
      { type: UnitType.LIGHT_TANK, count: 4 },
      { type: UnitType.HEAVY_TANK, count: 3 },
      { type: UnitType.ARTILLERY, count: 2 },
    ],
    maxAffordableCostPercent: 1.0,
    spawnSpreadFactor: 0.65,
  },
  { // Wave 6 (New)
    minTime: 420000, // Approx 7m
    units: [
      { type: UnitType.INFANTRY, count: 15 },
      { type: UnitType.GRENADIER, count: 5 },
      { type: UnitType.LIGHT_TANK, count: 5 },
      { type: UnitType.HEAVY_TANK, count: 4 },
      { type: UnitType.ARTILLERY, count: 4 },
    ],
    maxAffordableCostPercent: 1.0,
    spawnSpreadFactor: 0.5,
  },
  { // Wave 7 - Endless Wave (New)
    minTime: 540000, // Approx 9m
    units: [ // Tremendous desired counts
      { type: UnitType.INFANTRY, count: 20 },
      { type: UnitType.GRENADIER, count: 10 },
      { type: UnitType.LIGHT_TANK, count: 25 },
      { type: UnitType.HEAVY_TANK, count: 15 },
      { type: UnitType.ARTILLERY, count: 10 },
    ],
    maxAffordableCostPercent: 1.0, // Spend almost all money
    spawnSpreadFactor: 0.7,
    isEndlessWave: true, // Mark as endless, economy-scaled, and randomized
  }
];


// Super Tank Spawning Logic (remains independent for now)
export const SUPER_TANK_SPAWN_TIME_THRESHOLD_MS = 540000;  // Ensure it's a bit later, e.g. at the start of endless wave.
export const SUPER_TANK_SPAWN_INTERVAL_MS = 45000;      
export const SUPER_TANK_SPAWN_PROBABILITY = 0.4;        
export const MAX_ACTIVE_SUPER_TANKS = 1;                

export const INITIAL_MONEY = 300;
export const PROJECTILE_LIFESPAN = 2000;
export const LASER_DURATION = 300;
export const LASER_BEAM_WIDTH = CELL_SIZE * 0.2; 
export const LASER_HIT_SOUND_INTERVAL_MS = 250; // Added

// Enemy AI Economy
export const ENEMY_INITIAL_MONEY = 1000; 
export const ENEMY_MONEY_INCREASE_RATE = 200; 

export const GAME_UPDATE_INTERVAL = 1000 / 60;

// --- Victory Fireworks Constants ---
export const VICTORY_FIREWORK_INTERVAL_MS = 600;
export const FIREWORK_COLORS = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff, 0xff8800, 0x8800ff];
export const FIREWORK_SPAWN_Y = CELL_SIZE * 12; 
export const FIREWORK_SPAWN_X_RANGE = GRID_SIZE_X * CELL_SIZE * 0.7; 
export const FIREWORK_SPAWN_Z_RANGE = GRID_SIZE_Z * CELL_SIZE * 0.4; 
export const FIREWORK_EXPLOSION_PARTICLE_COUNT = 60; 
export const FIREWORK_EXPLOSION_PARTICLE_LIFESPAN_MS = 1800;
export const FIREWORK_EXPLOSION_BASE_SPEED = 10;
export const FIREWORK_GRAVITY = 9.81 * 0.5; 

// Particle Constants
export const PARTICLE_COUNT_PER_EXPLOSION = 30;
export const PARTICLE_LIFESPAN_MS = 1000;
export const PARTICLE_BASE_SPEED = 5;
export const PARTICLE_INITIAL_SIZE = CELL_SIZE * 0.2;
export const PARTICLE_COLOR_CANNON = 0xffa500;
export const PARTICLE_COLOR_ENEMY_DEATH = 0xff0000;
export const PARTICLE_COLOR_PLAYER_DEATH = 0x007bff; 
export const MAX_PARTICLES_PER_SYSTEM_BUFFER = PARTICLE_COUNT_PER_EXPLOSION + FIREWORK_EXPLOSION_PARTICLE_COUNT + 20; // This constant's direct relevance might change with particle consolidation.
export const MAX_TOTAL_PARTICLES = 5000; // Max particles for the new consolidated system. Increased from 2000 based on previous thought.


// --- Grenadier Fire Area Particle Constants ---
export const FIRE_PARTICLE_SPAWN_RATE_PER_AREA_PER_SECOND = 10; // Particles per second per fire area
export const FIRE_PARTICLE_COLORS = [0xff4500, 0xff6600, 0xffa500]; // Reddish-Orange, Orange, Lighter Orange
export const FIRE_PARTICLE_LIFESPAN_MS_MIN = 600;
export const FIRE_PARTICLE_LIFESPAN_MS_MAX = 1300;
export const FIRE_PARTICLE_BASE_SPEED_MIN = CELL_SIZE * 0.1;
export const FIRE_PARTICLE_BASE_SPEED_MAX = CELL_SIZE * 0.4;
export const FIRE_PARTICLE_INITIAL_SIZE_MIN = CELL_SIZE * 0.06;
export const FIRE_PARTICLE_INITIAL_SIZE_MAX = CELL_SIZE * 0.18;
export const FIRE_PARTICLE_RISE_SPEED = CELL_SIZE * 0.7; // How fast particles drift upwards
export const FIRE_PARTICLE_SPREAD_RADIUS_FACTOR = 0.7; // How far particles spawn from fire area center (relative to fire area radius)
export const FIRE_AREA_HIT_SOUND_INTERVAL_MS = 750; // Cooldown for sound from fire DoT


// Camera constants
export const ROTATION_SENSITIVITY = -0.004;
export const PAN_SENSITIVITY_FACTOR = 0.005; // Added for right-click panning
export const MIN_CAMERA_PHI = 0.1;
export const MAX_CAMERA_PHI = Math.PI - 0.1;
export const CAMERA_DRAG_THRESHOLD = 4;
export const ZOOM_SENSITIVITY = 0.01;
export const MIN_CAMERA_DISTANCE = CELL_SIZE * 2;
export const MAX_CAMERA_DISTANCE = GRID_SIZE_Z * CELL_SIZE * 0.8; 

// Touch Camera Control Constants
export const ROTATION_SENSITIVITY_TOUCH = -0.004; // Same as mouse for now
export const PAN_SENSITIVITY_TOUCH_FACTOR = 0.0025; // Potentially needs to be different from mouse
export const ZOOM_SENSITIVITY_TOUCH = 0.03;


// Placement Highlight
export const PLACEMENT_ZONE_HIGHLIGHT_COLOR = 0x00aaff;
export const RANGE_INDICATOR_COLOR = 0x00ffff; // Cyan for range indicator
export const RANGE_INDICATOR_OPACITY = 0.25;
export const RANGE_INDICATOR_Y_OFFSET = GROUND_LEVEL_Y + 0.02; // Slightly above ground, below cell highlight


// --- Vision System Constants ---
export const TOWER_DETECTION_RANGE = CELL_SIZE * 4 
export const UNDETECTED_PLAYER_UNIT_COLOR_MULTIPLIER = 0.45; 
export const UNDETECTED_ENEMY_UNIT_COLOR_MULTIPLIER = 0.08;  
export const UNDETECTED_BASE_COLOR_MULTIPLIER = 0.45; 


// --- Infantry and Vehicle Regeneration Constants ---
export const INFANTRY_SELF_REGEN_RATE = 2; 
export const INFANTRY_REPAIR_DETECTION_RANGE = CELL_SIZE * 5; 
export const INFANTRY_REPAIR_EFFECT_RANGE = CELL_SIZE * 1.5; 
export const VEHICLE_REGEN_PER_INFANTRY_RATE = 2.5; 
export const MAX_VEHICLE_REGEN_FROM_INFANTRY_RATE = 10.0; 

// --- Base Repair/Regeneration Constants ---
export const BASE_AUTO_REGEN_RATE_PER_SECOND = 2; // HP per second
export const BASE_REPAIR_COST_PER_HP = 1; // Money cost per HP


// --- Background Element Placement ---
export const SCENE_ELEMENT_PADDING_FROM_GRID = CELL_SIZE * 2;
export const SCENE_ELEMENT_BAND_DEPTH_TREES_ANIMALS = GRID_SIZE_X * CELL_SIZE * 0.8;
// export const SCENE_ELEMENT_BAND_DEPTH_HILLS = GRID_SIZE_X * CELL_SIZE * 1.5; // Hills removed


// Far Ground Plane
export const BACKGROUND_TERRAIN_FAR_GROUND_COLOR = 0x1A6A1A; 
export const BACKGROUND_FAR_GROUND_Y_OFFSET = -CELL_SIZE * 0.2; 
export const BACKGROUND_FAR_GROUND_SIZE_FACTOR = 3; 

// Sky Gradient Colors
export const SKY_TOP_COLOR_HEX = 0x3A70a2; // Medium Blue
export const SKY_HORIZON_COLOR_HEX = 0x9CaCFF; // Very Light Blue / Whitish

// New Environmental Details Constants

// Trees - Adapted for ring placement
export const TREE_TRUNK_COLOR = 0x8B4513; 
export const TREE_CANOPY_COLOR_RANGE_START = 0x006400; 
export const TREE_CANOPY_COLOR_RANGE_END = 0x228B22;   
export const NUM_TREES = 50;
export const TREE_TRUNK_RADIUS = CELL_SIZE * 0.1;
export const TREE_TRUNK_HEIGHT_MIN = CELL_SIZE * 0.8;
export const TREE_TRUNK_HEIGHT_MAX = CELL_SIZE * 1.5;
export const TREE_CANOPY_RADIUS_MIN = CELL_SIZE * 0.4;
export const TREE_CANOPY_RADIUS_MAX = CELL_SIZE * 0.8;
export const TREE_CANOPY_HEIGHT_MIN = CELL_SIZE * 1.0;
export const TREE_CANOPY_HEIGHT_MAX = CELL_SIZE * 2.0;

// Birds
export const BIRD_COLOR = 0x101010; 
export const NUM_BIRDS = 12;
export const BIRD_SIZE = CELL_SIZE * 0.3;
export const BIRD_FLIGHT_HEIGHT_MIN = CELL_SIZE * 10;
export const BIRD_FLIGHT_HEIGHT_MAX = CELL_SIZE * 15;
// export const BIRD_SPREAD_RADIUS_FACTOR = 2.5; // Original spread, now orbit-based
export const BIRD_ORBIT_RADIUS_MIN_FACTOR = 1.0; // Factor of average of grid half-width/depth
export const BIRD_ORBIT_RADIUS_MAX_FACTOR = 1.6;
export const BIRD_ORBIT_SPEED_FACTOR = 0.15; // Radians per second
export const BIRD_PITCH_VARIATION = 0.4; // Radians for random pitch offset

// Cows
export const COW_COLOR_BODY = 0xFFFFFF; 
export const COW_COLOR_SPOTS = 0x000000; 
export const NUM_COWS = 4;
export const COW_SIZE_X = CELL_SIZE * 0.5;
export const COW_SIZE_Y = CELL_SIZE * 0.3;
export const COW_SIZE_Z = CELL_SIZE * 0.7;

// Sheep
export const SHEEP_COLOR = 0xE0E0E0; 
export const NUM_SHEEP = 5;
export const SHEEP_SIZE_X = CELL_SIZE * 0.35;
export const SHEEP_SIZE_Y = CELL_SIZE * 0.3;
export const SHEEP_SIZE_Z = CELL_SIZE * 0.45;

// Animal Wandering Behavior
export const ANIMAL_WANDER_DISTANCE_FROM_ORIGIN = CELL_SIZE * 4;
export const ANIMAL_WANDER_TARGET_CHANGE_MIN_MS = 4000;
export const ANIMAL_WANDER_TARGET_CHANGE_MAX_MS = 10000;
export const ANIMAL_MOVE_SPEED_UNITS_PER_SEC = CELL_SIZE * 0.25;
export const ANIMAL_TURN_LERP_FACTOR = 0.04;
export const ANIMAL_STOPPING_DISTANCE = CELL_SIZE * 0.15;
export const ANIMAL_PAUSE_CHANCE = 0.3; // 30% chance to pause instead of finding new target


export const GRID_CENTER_X = 0;
export const GRID_CENTER_Z = 0; 
export const GRID_HALF_WIDTH = (GRID_SIZE_X * CELL_SIZE) / 2;
export const GRID_HALF_DEPTH = (GRID_SIZE_Z * CELL_SIZE) / 2;

// --- Health Bar Constants ---
export const HEALTH_BAR_BASE_WIDTH = CELL_SIZE * 0.8;       // Base width, scaled by unit's visualScale
export const HEALTH_BAR_HEIGHT = CELL_SIZE * 0.1;         // Fixed height for readability
export const HEALTH_BAR_Y_OFFSET_ABOVE_MODEL = CELL_SIZE * 0.25; // Vertical offset from the calculated top of the unit model
export const HEALTH_BAR_BACKGROUND_COLOR = 0x701010;     // Dark red for background
export const HEALTH_BAR_FOREGROUND_COLOR = 0x00DD00;     // Bright green for current health
export const HEALTH_BAR_VISIBILITY_THRESHOLD = 0.99;      // Show if health < maxHealth * threshold