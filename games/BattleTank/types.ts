
export enum TowerType {
  MACHINE_GUN = 'MACHINE_GUN',
  CANNON = 'CANNON',
  LASER = 'LASER',
}

export enum UnitType { // Renamed from EnemyType
  LIGHT_TANK = 'LIGHT_TANK', // Renamed from TANK
  INFANTRY = 'INFANTRY',
  HEAVY_TANK = 'HEAVY_TANK',
  ARTILLERY = 'ARTILLERY', 
  SUPER_TANK = 'SUPER_TANK', // Added Super Tank
  GRENADIER = 'GRENADIER', // Added Grenadier
}

export type UnitOwner = 'PLAYER' | 'ENEMY';

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export interface Tower {
  id: string;
  type: TowerType;
  position: Vector3D; // Grid cell center
  targetId?: string; // Target GameUnit ID
  lastShotTime: number;
  rotationY?: number; // For aiming
}

export interface GameUnit { // Renamed from Enemy
  id: string;
  type: UnitType;
  owner: UnitOwner; // Added: PLAYER or ENEMY
  position: Vector3D;
  health: number;
  rotationY?: number;
  targetId?: string; // Target GameUnit ID or BASE_ID
  isAttacking?: boolean; // General attacking flag
  lastAttackTime?: number;
  lastFireDamageSoundTimeMs?: number; // Added for fire area sound cooldown
  // targetWaypoint is implicit from targetId's position
}

export interface UnitProjectile { // Merged from Projectile and EnemyProjectile
  id: string;
  owner: UnitOwner; // Added: PLAYER or ENEMY (owner of the projectile)
  firerId: string; // ID of the GameUnit or Tower that fired it
  projectileType: TowerType | UnitType; // What kind of projectile (laser, cannon, tank shell etc.)
  position: Vector3D;
  velocity: Vector3D;
  targetPosition?: Vector3D; // For cannon AOE or laser end
  laserEndTime?: number; // For player tower lasers
  creationTime: number;
  lastHitSoundTime?: number; // Added for laser hit sound cooldown
}

// Wave and EnemySpawnDetail removed

export type GamePhase = 'PLACEMENT' | 'ACTIVE_COMBAT' | 'GAME_OVER' | 'VICTORY'; // 'INITIAL' removed, WAVE_ACTIVE renamed to ACTIVE_COMBAT

export interface GridCell {
  x: number;
  z: number;
  isOccupied: boolean;
  isPlayerBase: boolean;
  isEnemyBase: boolean; // Added
}

export interface Particle {
  id: string;
  position: Vector3D;
  velocity: Vector3D;
  startTime: number;
  maxLife: number;
  color: number;
  initialSize: number;
  currentSize: number;
  hasGravity?: boolean; // Added for firework particles
  isActive: boolean; // Added for pooling
}

export interface ParticleSystem {
  id: string;
  particles: Particle[];
}

// Added for UnitType Artillery
export interface UnitStats {
  cost: number;
  health: number;
  speed: number;
  value: number;
  attackRange: number;
  fireRate: number;
  projectileDamage: number;
  barrelOffsetY: number;
  color: number;
  visualScale?: number;
  detectionRange: number;
  aoeRadius?: number; // Added for artillery AOE
  // Grenadier specific area effect properties
  areaEffectDurationMs?: number;
  areaEffectDamagePerSecond?: number;
  areaEffectRadius?: number;
}

export interface FireArea {
  id: string;
  owner: UnitOwner;
  position: Vector3D; // Center of the fire area on the ground
  radius: number;
  startTime: number;
  durationMs: number;
  damagePerSecond: number;
}