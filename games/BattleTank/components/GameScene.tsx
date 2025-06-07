
import React, { useRef, useEffect, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { Tower, GameUnit, UnitProjectile, TowerType, Vector3D, GridCell, Particle, UnitType, UnitOwner, FireArea } from '../types.ts'; // Added Particle
import {
    GRID_SIZE_X, GRID_SIZE_Z, CELL_SIZE, TOWER_SPECS, GROUND_LEVEL_Y, TOWER_BASE_HEIGHT,
    ROTATION_SENSITIVITY, MIN_CAMERA_PHI, MAX_CAMERA_PHI, CAMERA_DRAG_THRESHOLD, PAN_SENSITIVITY_FACTOR,
    TANK_BODY_WIDTH, TANK_BODY_HEIGHT, TANK_BODY_DEPTH, TANK_TURRET_RADIUS, TANK_TURRET_HEIGHT,
    TANK_BARREL_LENGTH, TANK_BARREL_RADIUS, TANK_TRACK_WIDTH, TANK_TRACK_HEIGHT, TANK_TRACK_DEPTH,
    ZOOM_SENSITIVITY, MIN_CAMERA_DISTANCE, MAX_CAMERA_DISTANCE, PLAYER_BASE_SIZE_CELLS_X, ENEMY_BASE_SIZE_CELLS_X,
    UNIT_SPECS, MAX_TOTAL_PARTICLES, // Added MAX_TOTAL_PARTICLES
    INFANTRY_BODY_WIDTH, INFANTRY_BODY_HEIGHT, INFANTRY_BODY_DEPTH, INFANTRY_HEAD_RADIUS,
    ARTILLERY_CHASSIS_WIDTH, ARTILLERY_CHASSIS_HEIGHT, ARTILLERY_CHASSIS_DEPTH,
    ARTILLERY_WHEEL_RADIUS, ARTILLERY_WHEEL_THICKNESS, ARTILLERY_BARREL_LENGTH, ARTILLERY_BARREL_RADIUS,
    PLAYER_BASE_POSITION_GRID_Z, PLACEMENT_ZONE_HIGHLIGHT_COLOR, PLAYER_BASE_ID, ENEMY_BASE_ID,
    UNDETECTED_PLAYER_UNIT_COLOR_MULTIPLIER, UNDETECTED_ENEMY_UNIT_COLOR_MULTIPLIER, UNDETECTED_BASE_COLOR_MULTIPLIER,
    BACKGROUND_TERRAIN_FAR_GROUND_COLOR, BACKGROUND_FAR_GROUND_Y_OFFSET, BACKGROUND_FAR_GROUND_SIZE_FACTOR,
    SKY_TOP_COLOR_HEX, SKY_HORIZON_COLOR_HEX,
    TREE_TRUNK_COLOR, TREE_CANOPY_COLOR_RANGE_START, TREE_CANOPY_COLOR_RANGE_END, NUM_TREES,
    TREE_TRUNK_RADIUS, TREE_TRUNK_HEIGHT_MIN, TREE_TRUNK_HEIGHT_MAX,
    TREE_CANOPY_RADIUS_MIN, TREE_CANOPY_RADIUS_MAX, TREE_CANOPY_HEIGHT_MIN, TREE_CANOPY_HEIGHT_MAX,
    BIRD_COLOR, NUM_BIRDS, BIRD_SIZE, BIRD_FLIGHT_HEIGHT_MIN, BIRD_FLIGHT_HEIGHT_MAX, BIRD_ORBIT_RADIUS_MIN_FACTOR, BIRD_ORBIT_RADIUS_MAX_FACTOR, BIRD_ORBIT_SPEED_FACTOR, BIRD_PITCH_VARIATION,
    COW_COLOR_BODY, COW_COLOR_SPOTS, NUM_COWS, COW_SIZE_X, COW_SIZE_Y, COW_SIZE_Z,
    SHEEP_COLOR, NUM_SHEEP, SHEEP_SIZE_X, SHEEP_SIZE_Y, SHEEP_SIZE_Z,
    SCENE_ELEMENT_PADDING_FROM_GRID, SCENE_ELEMENT_BAND_DEPTH_TREES_ANIMALS,
    GRID_CENTER_X, GRID_CENTER_Z, GRID_HALF_WIDTH, GRID_HALF_DEPTH,
    HEALTH_BAR_BASE_WIDTH, HEALTH_BAR_HEIGHT, HEALTH_BAR_Y_OFFSET_ABOVE_MODEL,
    HEALTH_BAR_BACKGROUND_COLOR, HEALTH_BAR_FOREGROUND_COLOR, HEALTH_BAR_VISIBILITY_THRESHOLD,
    RANGE_INDICATOR_COLOR, RANGE_INDICATOR_OPACITY, RANGE_INDICATOR_Y_OFFSET,
    ANIMAL_WANDER_DISTANCE_FROM_ORIGIN, ANIMAL_WANDER_TARGET_CHANGE_MIN_MS, ANIMAL_WANDER_TARGET_CHANGE_MAX_MS,
    ANIMAL_MOVE_SPEED_UNITS_PER_SEC, ANIMAL_TURN_LERP_FACTOR, ANIMAL_STOPPING_DISTANCE, ANIMAL_PAUSE_CHANCE,
    ROTATION_SENSITIVITY_TOUCH, PAN_SENSITIVITY_TOUCH_FACTOR, ZOOM_SENSITIVITY_TOUCH
} from '../constants.ts';

interface GameSceneProps {
  towers: Tower[];
  playerUnits: GameUnit[];
  enemyUnits: GameUnit[];
  unitProjectiles: UnitProjectile[];
  particles: Particle[]; 
  activeFireAreas: FireArea[];
  onPlaceTower: (gridPosition: { x: number; z: number }) => void; 
  grid: GridCell[][];
  selectedTowerType: TowerType | null;
  playerBasePosition: Vector3D;
  enemyBasePosition: Vector3D;
  detectedByPlayer: Set<string>;
  detectedByEnemy: Set<string>;
}

interface BirdAnimData {
    mesh: THREE.Mesh;
    angle: number; 
    radius: number; 
    height: number; 
    speed: number; 
    initialPitch: number; 
    orbitCenter: THREE.Vector3;
}

interface AnimalAnimData {
    mesh: THREE.Group;
    origin: THREE.Vector3; 
    currentWanderTarget: THREE.Vector3 | null;
    timeUntilNewTargetMs: number;
    isMoving: boolean;
}


const applyShadows = (mesh: THREE.Object3D, cast = true, receive = true) => {
    mesh.traverse(child => {
        if (child instanceof THREE.Mesh) {
            child.castShadow = cast;
            child.receiveShadow = receive;
        }
    });
};

const createPlayerBaseMesh = (baseWorldPosition: Vector3D): THREE.Group => {
    const group = new THREE.Group();
    group.position.set(baseWorldPosition.x, GROUND_LEVEL_Y, baseWorldPosition.z);
    const baseWidth = PLAYER_BASE_SIZE_CELLS_X * CELL_SIZE;
    const baseDepth = CELL_SIZE;
    const baseHeight = CELL_SIZE * 0.8;
    const mainGeo = new THREE.BoxGeometry(baseWidth * 0.9, baseHeight, baseDepth * 0.9);
    const mainMat = new THREE.MeshStandardMaterial({ color: 0x78909c });
    const mainMesh = new THREE.Mesh(mainGeo, mainMat);
    mainMesh.position.y = baseHeight / 2;
    mainMesh.userData.originalColor = mainMat.color.clone(); 
    applyShadows(mainMesh);
    group.add(mainMesh);
    const bunkerHeight = baseHeight * 0.5;
    const bunkerWidth = baseWidth * 0.4;
    const bunkerDepth = baseDepth * 0.4;
    const bunkerGeo = new THREE.BoxGeometry(bunkerWidth, bunkerHeight, bunkerDepth);
    const bunkerMat = new THREE.MeshStandardMaterial({ color: 0x546e7a });
    const bunkerMesh = new THREE.Mesh(bunkerGeo, bunkerMat);
    bunkerMesh.position.y = baseHeight + bunkerHeight / 2;
    bunkerMesh.userData.originalColor = bunkerMat.color.clone(); 
    applyShadows(bunkerMesh);
    group.add(bunkerMesh);
    return group;
};

const createEnemyBaseMesh = (baseWorldPosition: Vector3D): THREE.Group => {
    const group = new THREE.Group();
    group.position.set(baseWorldPosition.x, GROUND_LEVEL_Y, baseWorldPosition.z);
    const baseWidth = ENEMY_BASE_SIZE_CELLS_X * CELL_SIZE;
    const baseDepth = CELL_SIZE * 1.5;
    const baseHeight = CELL_SIZE * 1.0;
    const mainGeo = new THREE.BoxGeometry(baseWidth * 0.95, baseHeight, baseDepth * 0.95);
    const mainMat = new THREE.MeshStandardMaterial({ color: 0xc62828 });
    const mainMesh = new THREE.Mesh(mainGeo, mainMat);
    mainMesh.position.y = baseHeight / 2;
    mainMesh.userData.originalColor = mainMat.color.clone(); 
    applyShadows(mainMesh);
    group.add(mainMesh);

    const spikeGeo = new THREE.ConeGeometry(CELL_SIZE * 0.3, CELL_SIZE * 0.8, 4);
    const spikeMat = new THREE.MeshStandardMaterial({color: 0x424242});
    for(let i=0; i < 4; i++) {
        const spike = new THREE.Mesh(spikeGeo, spikeMat);
        spike.position.set(
            (Math.random() - 0.5) * baseWidth * 0.7,
            baseHeight + CELL_SIZE * 0.4,
            (Math.random() - 0.5) * baseDepth * 0.7
        );
        spike.rotation.x = Math.random() * Math.PI;
        spike.rotation.z = Math.random() * Math.PI;
        spike.userData.originalColor = spikeMat.color.clone(); 
        applyShadows(spike);
        group.add(spike);
    }
    return group;
};

const createTowerMesh = (type: TowerType, specs: typeof TOWER_SPECS[TowerType]): THREE.Group => {
  const group = new THREE.Group();
  const baseGeo = new THREE.CylinderGeometry(CELL_SIZE * 0.4, CELL_SIZE * 0.45, TOWER_BASE_HEIGHT, 16);
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x424242 });
  const baseMesh = new THREE.Mesh(baseGeo, baseMat);
  baseMesh.position.y = TOWER_BASE_HEIGHT / 2;
  applyShadows(baseMesh);
  group.add(baseMesh);
  const turretGroup = new THREE.Group();
  turretGroup.name = "turret";
  group.add(turretGroup);

  switch (type) {
    case TowerType.MACHINE_GUN: {
      const pedestalHeight = CELL_SIZE * 0.3;
      const pedestalGeo = new THREE.CylinderGeometry(CELL_SIZE * 0.15, CELL_SIZE * 0.15, pedestalHeight, 12);
      const pedestalMat = new THREE.MeshStandardMaterial({ color: 0x616161 });
      const pedestalMesh = new THREE.Mesh(pedestalGeo, pedestalMat);
      pedestalMesh.position.y = TOWER_BASE_HEIGHT + pedestalHeight / 2;
      applyShadows(pedestalMesh);
      turretGroup.add(pedestalMesh);
      const gunBodyHeight = CELL_SIZE * 0.3;
      const gunBodyGeo = new THREE.BoxGeometry(CELL_SIZE * 0.25, gunBodyHeight, CELL_SIZE * 0.5);
      const gunBodyMat = new THREE.MeshStandardMaterial({ color: 0x757575 });
      const gunBodyMesh = new THREE.Mesh(gunBodyGeo, gunBodyMat);
      gunBodyMesh.position.y = TOWER_BASE_HEIGHT + pedestalHeight + gunBodyHeight / 2;
      applyShadows(gunBodyMesh);
      turretGroup.add(gunBodyMesh);
      const barrelLength = CELL_SIZE * 0.4;
      const barrelRadius = CELL_SIZE * 0.04;
      const barrelGeo = new THREE.CylinderGeometry(barrelRadius, barrelRadius, barrelLength, 8);
      const barrelMat = new THREE.MeshStandardMaterial({ color: 0x212121 });
      const barrelMesh1 = new THREE.Mesh(barrelGeo, barrelMat);
      barrelMesh1.position.set(CELL_SIZE * 0.07, TOWER_BASE_HEIGHT + pedestalHeight + gunBodyHeight / 2, barrelLength / 2);
      barrelMesh1.rotation.x = Math.PI / 2;
      applyShadows(barrelMesh1);
      turretGroup.add(barrelMesh1);
      const barrelMesh2 = new THREE.Mesh(barrelGeo, barrelMat);
      barrelMesh2.position.set(-CELL_SIZE * 0.07, TOWER_BASE_HEIGHT + pedestalHeight + gunBodyHeight / 2, barrelLength / 2);
      barrelMesh2.rotation.x = Math.PI / 2;
      applyShadows(barrelMesh2);
      turretGroup.add(barrelMesh2);
      break;
    }
    case TowerType.CANNON: {
      const platformHeight = CELL_SIZE * 0.15;
      const platformRadius = CELL_SIZE * 0.35;
      const platformGeo = new THREE.CylinderGeometry(platformRadius, platformRadius, platformHeight, 16);
      const platformMat = new THREE.MeshStandardMaterial({ color: 0x5d4037 });
      const platformMesh = new THREE.Mesh(platformGeo, platformMat);
      platformMesh.position.y = TOWER_BASE_HEIGHT + platformHeight / 2;
      applyShadows(platformMesh);
      turretGroup.add(platformMesh);
      const cannonBodyHeight = CELL_SIZE * 0.5;
      const cannonBodyRadius = CELL_SIZE * 0.25;
      const cannonBodyGeo = new THREE.CylinderGeometry(cannonBodyRadius, cannonBodyRadius * 0.9, cannonBodyHeight, 12);
      const cannonBodyMat = new THREE.MeshStandardMaterial({ color: specs.color });
      const cannonBodyMesh = new THREE.Mesh(cannonBodyGeo, cannonBodyMat);
      cannonBodyMesh.position.y = TOWER_BASE_HEIGHT + platformHeight + cannonBodyHeight / 2;
      applyShadows(cannonBodyMesh);
      turretGroup.add(cannonBodyMesh);
      const barrelLength = CELL_SIZE * 0.6;
      const barrelRadiusStart = CELL_SIZE * 0.15;
      const barrelRadiusEnd = CELL_SIZE * 0.12;
      const barrelGeo = new THREE.CylinderGeometry(barrelRadiusStart, barrelRadiusEnd, barrelLength, 12);
      const barrelMat = new THREE.MeshStandardMaterial({ color: 0x388e3c });
      const barrelMesh = new THREE.Mesh(barrelGeo, barrelMat);
      barrelMesh.position.y = TOWER_BASE_HEIGHT + platformHeight + cannonBodyHeight / 2;
      barrelMesh.position.z = barrelLength / 2 - CELL_SIZE * 0.05;
      barrelMesh.rotation.x = Math.PI / 2;
      applyShadows(barrelMesh);
      turretGroup.add(barrelMesh);
      break;
    }
    case TowerType.LASER: {
      const mainHousingHeight = CELL_SIZE * 0.7;
      const mainHousingGeo = new THREE.BoxGeometry(CELL_SIZE * 0.4, mainHousingHeight, CELL_SIZE * 0.3);
      const mainHousingMat = new THREE.MeshStandardMaterial({ color: 0x0277bd });
      const mainHousingMesh = new THREE.Mesh(mainHousingGeo, mainHousingMat);
      mainHousingMesh.position.y = TOWER_BASE_HEIGHT + mainHousingHeight / 2;
      applyShadows(mainHousingMesh);
      turretGroup.add(mainHousingMesh);
      const emitterDishRadius = CELL_SIZE * 0.15;
      const emitterDishHeight = CELL_SIZE * 0.05;
      const emitterDishGeo = new THREE.CylinderGeometry(emitterDishRadius, emitterDishRadius*0.8, emitterDishHeight, 16);
      const emitterDishMat = new THREE.MeshStandardMaterial({ color: 0x40c4ff });
      const emitterDishMesh = new THREE.Mesh(emitterDishGeo, emitterDishMat);
      emitterDishMesh.position.y = TOWER_BASE_HEIGHT + mainHousingHeight / 2;
      emitterDishMesh.position.z = CELL_SIZE * 0.15 + emitterDishHeight/2;
      emitterDishMesh.rotation.x = Math.PI / 2;
      applyShadows(emitterDishMesh);
      turretGroup.add(emitterDishMesh);
      break;
    }
    default:
      const fallbackGeo = new THREE.BoxGeometry(CELL_SIZE * 0.3, specs.modelHeight, CELL_SIZE * 0.3);
      const fallbackMat = new THREE.MeshStandardMaterial({ color: specs.color });
      const fallbackMesh = new THREE.Mesh(fallbackGeo, fallbackMat);
      fallbackMesh.position.y = TOWER_BASE_HEIGHT + specs.modelHeight / 2;
      applyShadows(fallbackMesh);
      turretGroup.add(fallbackMesh);
  }
  return group;
};

const createUnitMesh = (type: UnitType, owner: UnitOwner, stats: Readonly<typeof UNIT_SPECS[UnitType]>): THREE.Group => {
  const group = new THREE.Group();
  group.userData.unitType = type; 
  group.userData.owner = owner;   
  const baseFactionColor = owner === 'PLAYER' ? 0x3d8bff : 0xcc0000; 
  
  const createMaterial = (colorValue: number | THREE.Color) => {
    const material = new THREE.MeshStandardMaterial({ color: colorValue });
    return material;
  };

  const modelColor = new THREE.Color(baseFactionColor);
  const turretColor = modelColor.clone().offsetHSL(0, 0, -0.1);
  const barrelColor = new THREE.Color(0x404040);

  const addMeshWithOriginalColor = (
    geometry: THREE.BufferGeometry,
    materialColor: THREE.Color,
    parentGroup: THREE.Group,
    position?: {x?:number, y?:number, z?:number},
    rotation?: {x?:number, y?:number, z?:number}
  ) => {
      const material = createMaterial(materialColor);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData.originalColor = materialColor.clone(); 
      if(position) mesh.position.set(position.x || 0, position.y || 0, position.z || 0);
      if(rotation) mesh.rotation.set(rotation.x || 0, rotation.y || 0, rotation.z || 0);
      applyShadows(mesh);
      parentGroup.add(mesh);
      return mesh;
  };

  switch (type) {
    case UnitType.LIGHT_TANK: { 
      const bodyGeo = new THREE.BoxGeometry(TANK_BODY_WIDTH, TANK_BODY_HEIGHT, TANK_BODY_DEPTH);
      addMeshWithOriginalColor(bodyGeo, modelColor, group);

      const trackMatColor = new THREE.Color(0x333333);
      const trackGeo = new THREE.BoxGeometry(TANK_TRACK_WIDTH * 0.2, TANK_TRACK_HEIGHT, TANK_TRACK_DEPTH);
      addMeshWithOriginalColor(trackGeo, trackMatColor, group, {x: -TANK_BODY_WIDTH / 2 * 0.9, y: -TANK_BODY_HEIGHT * 0.1});
      addMeshWithOriginalColor(trackGeo, trackMatColor, group, {x: TANK_BODY_WIDTH / 2 * 0.9, y: -TANK_BODY_HEIGHT * 0.1});
      
      const turretGeo = new THREE.CylinderGeometry(TANK_TURRET_RADIUS, TANK_TURRET_RADIUS * 0.9, TANK_TURRET_HEIGHT, 16);
      const turretMesh = addMeshWithOriginalColor(turretGeo, turretColor, group, {y: TANK_BODY_HEIGHT / 2 + TANK_TURRET_HEIGHT / 2 - CELL_SIZE * 0.05});

      const barrelGeo = new THREE.CylinderGeometry(TANK_BARREL_RADIUS, TANK_BARREL_RADIUS * 0.8, TANK_BARREL_LENGTH, 8);
      addMeshWithOriginalColor(barrelGeo, barrelColor, group,
        {y: turretMesh.position.y, z: TANK_TURRET_RADIUS * 0.5 + TANK_BARREL_LENGTH / 2},
        {x: Math.PI / 2}
      );
      break;
    }
    case UnitType.HEAVY_TANK: {
      const bodyGeo = new THREE.BoxGeometry(TANK_BODY_WIDTH, TANK_BODY_HEIGHT, TANK_BODY_DEPTH);
      addMeshWithOriginalColor(bodyGeo, modelColor, group);

      const trackMatColor = new THREE.Color(0x333333);
      const trackGeo = new THREE.BoxGeometry(TANK_TRACK_WIDTH * 0.2, TANK_TRACK_HEIGHT, TANK_TRACK_DEPTH);
      addMeshWithOriginalColor(trackGeo, trackMatColor, group, {x: -TANK_BODY_WIDTH / 2 * 0.9, y: -TANK_BODY_HEIGHT * 0.1});
      addMeshWithOriginalColor(trackGeo, trackMatColor, group, {x: TANK_BODY_WIDTH / 2 * 0.9, y: -TANK_BODY_HEIGHT * 0.1});

      const turretWidth = TANK_TURRET_RADIUS * 1.8;
      const turretDepth = TANK_TURRET_RADIUS * 1.8;
      const turretGeo = new THREE.BoxGeometry(turretWidth, TANK_TURRET_HEIGHT, turretDepth);
      const turretMesh = addMeshWithOriginalColor(turretGeo, turretColor, group, {y: TANK_BODY_HEIGHT / 2 + TANK_TURRET_HEIGHT / 2 - CELL_SIZE * 0.05});
      
      const barrelGeo = new THREE.CylinderGeometry(TANK_BARREL_RADIUS * 1.1, TANK_BARREL_RADIUS * 0.9, TANK_BARREL_LENGTH * 1.1, 8);
      addMeshWithOriginalColor(barrelGeo, barrelColor, group,
        {y: turretMesh.position.y, z: turretDepth / 2 + (TANK_BARREL_LENGTH * 1.1) / 2 - TANK_TURRET_RADIUS * 0.2},
        {x: Math.PI / 2}
      );
      break;
    }
    case UnitType.SUPER_TANK: {
      const bodyGeo = new THREE.BoxGeometry(TANK_BODY_WIDTH, TANK_BODY_HEIGHT, TANK_BODY_DEPTH);
      addMeshWithOriginalColor(bodyGeo, modelColor, group);

      const trackMatColor = new THREE.Color(0x222222);
      const trackGeo = new THREE.BoxGeometry(TANK_TRACK_WIDTH * 0.2, TANK_TRACK_HEIGHT, TANK_TRACK_DEPTH);
      addMeshWithOriginalColor(trackGeo, trackMatColor, group, {x: -TANK_BODY_WIDTH / 2 * 0.9, y: -TANK_BODY_HEIGHT * 0.1});
      addMeshWithOriginalColor(trackGeo, trackMatColor, group, {x: TANK_BODY_WIDTH / 2 * 0.9, y: -TANK_BODY_HEIGHT * 0.1});

      const superTurretHeight = TANK_TURRET_HEIGHT * 1.1;
      const superTurretWidth = TANK_TURRET_RADIUS * 2.2;
      const superTurretDepth = TANK_TURRET_RADIUS * 1.8;
      const turretGeo = new THREE.BoxGeometry(superTurretWidth, superTurretHeight, superTurretDepth);
      const superTurretColor = turretColor.clone().offsetHSL(0,0,-0.05);
      const turretMesh = addMeshWithOriginalColor(turretGeo, superTurretColor, group, {y: TANK_BODY_HEIGHT / 2 + superTurretHeight / 2 - CELL_SIZE * 0.05});

      const barrelGeo = new THREE.CylinderGeometry(TANK_BARREL_RADIUS * 1.2, TANK_BARREL_RADIUS, TANK_BARREL_LENGTH * 1.2, 8);
      const barrelHorizontalOffset = superTurretWidth * 0.25;
      addMeshWithOriginalColor(barrelGeo, barrelColor, group,
        {x: barrelHorizontalOffset, y: turretMesh.position.y, z: superTurretDepth / 2 + (TANK_BARREL_LENGTH * 1.2) / 2 - TANK_TURRET_RADIUS * 0.1},
        {x: Math.PI / 2}
      );
      addMeshWithOriginalColor(barrelGeo, barrelColor, group,
        {x: -barrelHorizontalOffset, y: turretMesh.position.y, z: superTurretDepth / 2 + (TANK_BARREL_LENGTH * 1.2) / 2 - TANK_TURRET_RADIUS * 0.1},
        {x: Math.PI / 2}
      );
      break;
    }
    case UnitType.INFANTRY:
    case UnitType.GRENADIER: { 
      const bodyGeo = new THREE.BoxGeometry(INFANTRY_BODY_WIDTH, INFANTRY_BODY_HEIGHT, INFANTRY_BODY_DEPTH);
      addMeshWithOriginalColor(bodyGeo, modelColor, group);

      const headGeo = new THREE.SphereGeometry(INFANTRY_HEAD_RADIUS, 8, 8);
      const headColor = modelColor.clone().offsetHSL(0,0,0.1);
      addMeshWithOriginalColor(headGeo, headColor, group, {y: INFANTRY_BODY_HEIGHT / 2 + INFANTRY_HEAD_RADIUS * 0.8});
      
      if (type === UnitType.INFANTRY) { 
        const gunWidth = INFANTRY_BODY_WIDTH * 0.25;
        const gunHeight = INFANTRY_BODY_HEIGHT * 0.15;
        const gunDepth = INFANTRY_BODY_WIDTH * 1.5;
        const gunGeo = new THREE.BoxGeometry(gunWidth, gunHeight, gunDepth);
        const gunColor = new THREE.Color(0x282828);
        const gunMesh = addMeshWithOriginalColor(gunGeo, gunColor, group,
          {x: INFANTRY_BODY_WIDTH * 0.45, y: -INFANTRY_BODY_HEIGHT * 0.05, z: gunDepth * 0.25}
        );
        gunMesh.rotation.set(0, -Math.PI / 18, Math.PI / 9);
      } else if (type === UnitType.GRENADIER) { 
        const pouchGeo = new THREE.BoxGeometry(INFANTRY_BODY_WIDTH * 0.5, INFANTRY_BODY_HEIGHT * 0.2, INFANTRY_BODY_DEPTH * 0.8);
        const pouchColor = modelColor.clone().offsetHSL(0, -0.1, -0.2);
        addMeshWithOriginalColor(pouchGeo, pouchColor, group, {x: -INFANTRY_BODY_WIDTH * 0.3, y: -INFANTRY_BODY_HEIGHT * 0.2});
      }
      break;
    }
    case UnitType.ARTILLERY: {
        const chassisGeo = new THREE.BoxGeometry(ARTILLERY_CHASSIS_WIDTH, ARTILLERY_CHASSIS_HEIGHT, ARTILLERY_CHASSIS_DEPTH);
        addMeshWithOriginalColor(chassisGeo, modelColor, group); 

        const wheelMatColor = new THREE.Color(0x333333);
        const wheelGeo = new THREE.CylinderGeometry(ARTILLERY_WHEEL_RADIUS, ARTILLERY_WHEEL_RADIUS, ARTILLERY_WHEEL_THICKNESS, 16);
        const wheelYOffset = -ARTILLERY_CHASSIS_HEIGHT / 2 + ARTILLERY_WHEEL_RADIUS;
        addMeshWithOriginalColor(wheelGeo, wheelMatColor, group,
            { x: -ARTILLERY_CHASSIS_WIDTH / 2 - ARTILLERY_WHEEL_THICKNESS / 2, y: wheelYOffset },
            { z: Math.PI / 2 });
        addMeshWithOriginalColor(wheelGeo, wheelMatColor, group,
            { x: ARTILLERY_CHASSIS_WIDTH / 2 + ARTILLERY_WHEEL_THICKNESS / 2, y: wheelYOffset },
            { z: Math.PI / 2 });
        
        const barrelGeo = new THREE.CylinderGeometry(ARTILLERY_BARREL_RADIUS, ARTILLERY_BARREL_RADIUS, ARTILLERY_BARREL_LENGTH, 12);
        addMeshWithOriginalColor(
            barrelGeo,
            barrelColor,
            group,
            {
                y: ARTILLERY_CHASSIS_HEIGHT / 1, 
                z: ARTILLERY_BARREL_LENGTH * 0.02, 
            },
            { x: Math.PI / 2.5 } 
        );
      break;
    }
  }
  group.scale.set(stats.visualScale || 1, stats.visualScale || 1, stats.visualScale || 1);
  return group;
};

const createUnitProjectileMeshGroup = (projectileType: TowerType | UnitType, owner: UnitOwner): THREE.Group => {
  const group = new THREE.Group();
  group.userData.projectileType = projectileType;
  group.userData.owner = owner;

  let geo: THREE.BufferGeometry;
  let mat: THREE.MeshStandardMaterial | THREE.MeshBasicMaterial; // Basic for laser
  let pointLight: THREE.PointLight | null = null;
  let mesh: THREE.Mesh;

  if (projectileType === TowerType.LASER) {
    geo = new THREE.CylinderGeometry(CELL_SIZE * 0.03, CELL_SIZE * 0.03, 1, 8); // Length 1, will be scaled
    mat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.6, depthWrite: false });
    mesh = new THREE.Mesh(geo, mat);
    mesh.name = "laser_beam"; // For specific updates
  } else {
    if (projectileType === TowerType.MACHINE_GUN || projectileType === UnitType.INFANTRY) {
        const w = projectileType === TowerType.MACHINE_GUN ? CELL_SIZE * 0.1 : CELL_SIZE * 0.08;
        const h = projectileType === TowerType.MACHINE_GUN ? CELL_SIZE * 0.1 : CELL_SIZE * 0.08;
        const d = projectileType === TowerType.MACHINE_GUN ? CELL_SIZE * 0.4 : CELL_SIZE * 0.3;
        geo = new THREE.BoxGeometry(w, h, d);
        mat = new THREE.MeshStandardMaterial({ color: 0xffcc00, emissive: 0xeeaa00, emissiveIntensity: 0.8 });
        pointLight = new THREE.PointLight(0xffffdd, 5.0, CELL_SIZE * 2.0, 1.5);
    } 
    else if (
        projectileType === TowerType.CANNON || 
        projectileType === UnitType.ARTILLERY ||
        projectileType === UnitType.LIGHT_TANK ||
        projectileType === UnitType.HEAVY_TANK ||
        projectileType === UnitType.SUPER_TANK
    ) {
        let radius = CELL_SIZE * 0.2; 
        if (projectileType === UnitType.LIGHT_TANK || projectileType === UnitType.HEAVY_TANK) radius = CELL_SIZE * 0.12;
        else if (projectileType === UnitType.SUPER_TANK) radius = CELL_SIZE * 0.15;
        
        geo = new THREE.SphereGeometry(radius, 8, 8);
        mat = new THREE.MeshStandardMaterial({ color: 0x404040, emissive: 0x151515, emissiveIntensity: 0.5 });
        pointLight = new THREE.PointLight(0xffddaa, 8.0, CELL_SIZE * 3.0, 1.5);
    } 
    else if (projectileType === UnitType.GRENADIER) {
        geo = new THREE.SphereGeometry(CELL_SIZE * 0.15, 6, 6);
        mat = new THREE.MeshStandardMaterial({ color: 0x223322 });
    } 
    else {
        geo = new THREE.SphereGeometry(CELL_SIZE * 0.1, 8, 8);
        const projectileColorOwner = owner === 'PLAYER' ? 0x89cff0 : 0xff7f7f;
        mat = new THREE.MeshStandardMaterial({ color: projectileColorOwner });
    }
    mesh = new THREE.Mesh(geo, mat);
    applyShadows(mesh, true, false);
  }
  
  group.add(mesh);
  mesh.userData.isProjectileMesh = true;

  if (pointLight) {
    pointLight.castShadow = false;
    pointLight.name = "projectile_light";
    group.add(pointLight);
    group.userData.pointLight = pointLight; 
  }
  return group;
};


const createEnvironmentalMeshes = (
    scene: THREE.Scene,
    birdAnimMap: React.MutableRefObject<Map<string, BirdAnimData>>,
    animalAnimMap: React.MutableRefObject<Map<string, AnimalAnimData>>
): THREE.Object3D[] => {
    const staticElements: THREE.Object3D[] = [];

    const farGroundGeo = new THREE.PlaneGeometry(GRID_SIZE_X * CELL_SIZE * BACKGROUND_FAR_GROUND_SIZE_FACTOR, GRID_SIZE_Z * CELL_SIZE * BACKGROUND_FAR_GROUND_SIZE_FACTOR);
    const farGroundMat = new THREE.MeshStandardMaterial({ color: BACKGROUND_TERRAIN_FAR_GROUND_COLOR, side: THREE.DoubleSide });
    const farGroundMesh = new THREE.Mesh(farGroundGeo, farGroundMat);
    farGroundMesh.rotation.x = -Math.PI / 2;
    farGroundMesh.position.set(GRID_CENTER_X, GROUND_LEVEL_Y + BACKGROUND_FAR_GROUND_Y_OFFSET, GRID_CENTER_Z);
    farGroundMesh.receiveShadow = true;
    staticElements.push(farGroundMesh);

    const getRandomPositionInBand = (gridCenterX: number, gridCenterZ: number, gridHalfWidthValue: number, gridHalfDepthValue: number, padding: number, bandDepth: number) => {
        const side = Math.floor(Math.random() * 4); 
        let x, z;
        const randomDepthOffset = (Math.random() - 0.5) * bandDepth; 
        switch (side) {
            case 0: 
                x = gridCenterX + (Math.random() - 0.5) * (gridHalfWidthValue * 2 + bandDepth);
                z = gridCenterZ - gridHalfDepthValue - padding - Math.abs(randomDepthOffset);
                break;
            case 1: 
                x = gridCenterX + (Math.random() - 0.5) * (gridHalfWidthValue * 2 + bandDepth);
                z = gridCenterZ + gridHalfDepthValue + padding + Math.abs(randomDepthOffset);
                break;
            case 2: 
                x = gridCenterX - gridHalfWidthValue - padding - Math.abs(randomDepthOffset);
                z = gridCenterZ + (Math.random() - 0.5) * (gridHalfDepthValue * 2 + bandDepth);
                break;
            case 3: 
            default:
                x = gridCenterX + gridHalfWidthValue + padding + Math.abs(randomDepthOffset);
                z = gridCenterZ + (Math.random() - 0.5) * (gridHalfDepthValue * 2 + bandDepth);
                break;
        }
        return { x, y: GROUND_LEVEL_Y, z };
    };
    
    const treesGroup = new THREE.Group();
    for (let i = 0; i < NUM_TREES; i++) {
        const tree = new THREE.Group();
        const trunkHeight = TREE_TRUNK_HEIGHT_MIN + Math.random() * (TREE_TRUNK_HEIGHT_MAX - TREE_TRUNK_HEIGHT_MIN);
        const trunkGeo = new THREE.CylinderGeometry(TREE_TRUNK_RADIUS, TREE_TRUNK_RADIUS * 1.2, trunkHeight, 6);
        const trunkMat = new THREE.MeshStandardMaterial({ color: TREE_TRUNK_COLOR });
        const trunk = new THREE.Mesh(trunkGeo, trunkMat);
        trunk.position.y = trunkHeight / 2; 
        applyShadows(trunk);
        tree.add(trunk);

        const canopyRadius = TREE_CANOPY_RADIUS_MIN + Math.random() * (TREE_CANOPY_RADIUS_MAX - TREE_CANOPY_RADIUS_MIN);
        const canopyHeight = TREE_CANOPY_HEIGHT_MIN + Math.random() * (TREE_CANOPY_HEIGHT_MAX - TREE_CANOPY_HEIGHT_MIN);
        const canopyGeo = new THREE.ConeGeometry(canopyRadius, canopyHeight, 8);
        const canopyColor = new THREE.Color(TREE_CANOPY_COLOR_RANGE_START).lerp(new THREE.Color(TREE_CANOPY_COLOR_RANGE_END), Math.random());
        const canopyMat = new THREE.MeshStandardMaterial({ color: canopyColor });
        const canopy = new THREE.Mesh(canopyGeo, canopyMat);
        canopy.position.y = trunkHeight + canopyHeight / 2 - canopyHeight * 0.1; 
        applyShadows(canopy);
        tree.add(canopy);

        const treePos = getRandomPositionInBand(GRID_CENTER_X, GRID_CENTER_Z, GRID_HALF_WIDTH, GRID_HALF_DEPTH, SCENE_ELEMENT_PADDING_FROM_GRID, SCENE_ELEMENT_BAND_DEPTH_TREES_ANIMALS);
        tree.position.set(treePos.x, treePos.y, treePos.z); 
        tree.rotation.y = Math.random() * Math.PI * 2;
        treesGroup.add(tree);
    }
    staticElements.push(treesGroup);
    
    const orbitCenterVec = new THREE.Vector3(GRID_CENTER_X, 0, GRID_CENTER_Z);
    const baseOrbitRadius = (GRID_HALF_WIDTH + GRID_HALF_DEPTH) / 2;

    for (let i = 0; i < NUM_BIRDS; i++) {
        const birdId = `bird-${i}`;
        const birdShape = new THREE.Shape();
        birdShape.moveTo(-BIRD_SIZE, 0); birdShape.lineTo(0, BIRD_SIZE * 0.5); birdShape.lineTo(BIRD_SIZE, 0); birdShape.lineTo(0, BIRD_SIZE * 0.2); birdShape.closePath();
        const birdGeo = new THREE.ShapeGeometry(birdShape);
        const birdMat = new THREE.MeshBasicMaterial({ color: BIRD_COLOR, side: THREE.DoubleSide }); 
        const bird = new THREE.Mesh(birdGeo, birdMat);
        
        const flightHeight = BIRD_FLIGHT_HEIGHT_MIN + Math.random() * (BIRD_FLIGHT_HEIGHT_MAX - BIRD_FLIGHT_HEIGHT_MIN);
        const orbitRadius = baseOrbitRadius * (BIRD_ORBIT_RADIUS_MIN_FACTOR + Math.random() * (BIRD_ORBIT_RADIUS_MAX_FACTOR - BIRD_ORBIT_RADIUS_MIN_FACTOR));
        const initialAngle = Math.random() * Math.PI * 2;
        const initialPitch = -Math.PI / 2 + (Math.random() - 0.5) * BIRD_PITCH_VARIATION;

        bird.position.set(
            orbitCenterVec.x + orbitRadius * Math.cos(initialAngle),
            flightHeight,
            orbitCenterVec.z + orbitRadius * Math.sin(initialAngle)
        );
        bird.userData.initialPitch = initialPitch; 

        applyShadows(bird, true, false); 
        scene.add(bird);
        birdAnimMap.current.set(birdId, {
            mesh: bird,
            angle: initialAngle,
            radius: orbitRadius,
            height: flightHeight,
            speed: BIRD_ORBIT_SPEED_FACTOR * (0.8 + Math.random() * 0.4), 
            initialPitch: initialPitch,
            orbitCenter: orbitCenterVec
        });
    }

    for (let i = 0; i < NUM_COWS; i++) {
        const animalId = `cow-${i}`;
        const cow = new THREE.Group(); 
        const bodyGeo = new THREE.BoxGeometry(COW_SIZE_X, COW_SIZE_Y, COW_SIZE_Z); 
        const bodyMat = new THREE.MeshStandardMaterial({ color: COW_COLOR_BODY }); 
        const body = new THREE.Mesh(bodyGeo, bodyMat); 
        applyShadows(body); cow.add(body);
        for (let s = 0; s < 3; s++) { 
            const spotSize = COW_SIZE_X * 0.15 * (0.5 + Math.random()); 
            const spotGeo = new THREE.SphereGeometry(spotSize, 6, 6); 
            const spotMat = new THREE.MeshStandardMaterial({ color: COW_COLOR_SPOTS }); 
            const spot = new THREE.Mesh(spotGeo, spotMat); 
            spot.position.set((Math.random() - 0.5) * COW_SIZE_X * 0.8, (Math.random() - 0.5) * COW_SIZE_Y * 0.8, (Math.random() - 0.5) * COW_SIZE_Z * 0.8); 
            cow.add(spot); 
        }
        const cowPos = getRandomPositionInBand(GRID_CENTER_X, GRID_CENTER_Z, GRID_HALF_WIDTH, GRID_HALF_DEPTH, SCENE_ELEMENT_PADDING_FROM_GRID * 2, SCENE_ELEMENT_BAND_DEPTH_TREES_ANIMALS * 0.5); 
        const originY = GROUND_LEVEL_Y + COW_SIZE_Y / 2;
        cow.position.set(cowPos.x, originY, cowPos.z); 
        cow.rotation.y = Math.random() * Math.PI * 2; 
        scene.add(cow);
        animalAnimMap.current.set(animalId, {
            mesh: cow,
            origin: new THREE.Vector3(cowPos.x, originY, cowPos.z),
            currentWanderTarget: null,
            timeUntilNewTargetMs: Math.random() * ANIMAL_WANDER_TARGET_CHANGE_MAX_MS,
            isMoving: false,
        });
    }
    for (let i = 0; i < NUM_SHEEP; i++) {
        const animalId = `sheep-${i}`;
        const sheep = new THREE.Group(); 
        const bodyGeo = new THREE.SphereGeometry(SHEEP_SIZE_X * 0.6, 8, 6); 
        const bodyMat = new THREE.MeshStandardMaterial({ color: SHEEP_COLOR }); 
        const body = new THREE.Mesh(bodyGeo, bodyMat); 
        body.scale.set(1, SHEEP_SIZE_Y / (SHEEP_SIZE_X*0.6) * 0.8, SHEEP_SIZE_Z / (SHEEP_SIZE_X*0.6)); 
        applyShadows(body); 
        sheep.add(body);
        const headRadius = SHEEP_SIZE_X * 0.25; 
        const headGeo = new THREE.SphereGeometry(headRadius, 6, 6); 
        const headMat = new THREE.MeshStandardMaterial({color: new THREE.Color(SHEEP_COLOR).multiplyScalar(0.8)}); 
        const head = new THREE.Mesh(headGeo, headMat); 
        head.position.set(0, SHEEP_SIZE_Y * 0.1, SHEEP_SIZE_Z * 0.4); 
        sheep.add(head);
        const sheepPos = getRandomPositionInBand(GRID_CENTER_X, GRID_CENTER_Z, GRID_HALF_WIDTH, GRID_HALF_DEPTH, SCENE_ELEMENT_PADDING_FROM_GRID * 2.5, SCENE_ELEMENT_BAND_DEPTH_TREES_ANIMALS * 0.4); 
        const originY = GROUND_LEVEL_Y + SHEEP_SIZE_Y / 2;
        sheep.position.set(sheepPos.x, originY, sheepPos.z); 
        sheep.rotation.y = Math.random() * Math.PI * 2; 
        scene.add(sheep);
        animalAnimMap.current.set(animalId, {
            mesh: sheep,
            origin: new THREE.Vector3(sheepPos.x, originY, sheepPos.z),
            currentWanderTarget: null,
            timeUntilNewTargetMs: Math.random() * ANIMAL_WANDER_TARGET_CHANGE_MAX_MS,
            isMoving: false,
        });
    }

    staticElements.forEach(el => scene.add(el));
    return staticElements;
};

const getUnitModelApproxTopOffset = (type: UnitType, scale: number): number => {
    switch (type) {
        case UnitType.INFANTRY:
        case UnitType.GRENADIER:
            return (INFANTRY_BODY_HEIGHT / 2 + INFANTRY_HEAD_RADIUS) * scale;
        case UnitType.ARTILLERY:
            return (ARTILLERY_CHASSIS_HEIGHT / 2 + ARTILLERY_BARREL_RADIUS * 2) * scale; 
        case UnitType.LIGHT_TANK:
        case UnitType.HEAVY_TANK:
        case UnitType.SUPER_TANK:
            return (TANK_BODY_HEIGHT / 2 + TANK_TURRET_HEIGHT) * scale;
        default:
            return (CELL_SIZE * 0.5) * scale; 
    }
};

const disposeMeshGroup = (group: THREE.Group, deepDispose = true) => {
    group.traverse(child => {
        if (child instanceof THREE.PointLight) { 
        } else if (child instanceof THREE.Mesh) {
            if (deepDispose) {
                child.geometry.dispose();
                if (Array.isArray(child.material)) {
                    child.material.forEach(mat => mat.dispose());
                } else if (child.material instanceof THREE.Material) {
                    child.material.dispose();
                }
            }
        }
    });
};

const getTouchDistance = (t0: Touch, t1: Touch): number => {
    const dx = t0.clientX - t1.clientX;
    const dy = t0.clientY - t1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
};

const getTouchMidpoint = (t0: Touch, t1: Touch): { x: number; y: number } => {
    return {
        x: (t0.clientX + t1.clientX) / 2,
        y: (t0.clientY + t1.clientY) / 2,
    };
};

const calculateInitialCameraTargetZ = (): number => {
    const playerBaseWorldZ = (PLAYER_BASE_POSITION_GRID_Z * CELL_SIZE) - GRID_HALF_DEPTH + (CELL_SIZE / 2);
    // Target a point somewhat between the grid center (0) and the player's base Z.
    // e.g., 60-70% of the way from Z=0 towards playerBaseWorldZ.
    return playerBaseWorldZ * 0.65; 
};

export const GameScene: React.FC<GameSceneProps> = ({
  towers, playerUnits, enemyUnits, unitProjectiles, particles, activeFireAreas, 
  onPlaceTower: onPlaceTowerProp, grid: gridProp, selectedTowerType: selectedTowerTypeProp, 
  playerBasePosition, enemyBasePosition,
  detectedByPlayer, detectedByEnemy
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const ssaoPassRef = useRef<SSAOPass | null>(null);
  const skyboxMeshRef = useRef<THREE.Mesh | null>(null);

  const towerMeshesRef = useRef<Map<string, THREE.Group>>(new Map());
  const playerUnitMeshesRef = useRef<Map<string, THREE.Group>>(new Map());
  const enemyUnitMeshesRef = useRef<Map<string, THREE.Group>>(new Map());
  const unitProjectileMeshGroupsRef = useRef<Map<string, THREE.Group>>(new Map()); 
  const consolidatedParticlesMeshRef = useRef<THREE.Points | null>(null); 
  const fireAreaMeshesRef = useRef<Map<string, THREE.Mesh>>(new Map());
  const healthBarMeshesRef = useRef<Map<string, THREE.Group>>(new Map());

  const inactiveUnitMeshPoolsRef = useRef<Map<UnitOwner, Map<UnitType, THREE.Group[]>>>(new Map());
  const inactiveProjectileMeshPoolRef = useRef<Map<TowerType | UnitType, THREE.Group[]>>(new Map()); 
  const inactiveHealthBarMeshPoolRef = useRef<THREE.Group[]>([]);

  const placementPlaneRef = useRef<THREE.Mesh | null>(null);
  const placementHighlightRef = useRef<THREE.Mesh | null>(null);
  const rangeIndicatorRef = useRef<THREE.Mesh | null>(null); 
  const fullRowHighlightMeshRef = useRef<THREE.Mesh | null>(null); 
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  
  const cameraTargetRef = useRef<THREE.Vector3>(new THREE.Vector3(0, GROUND_LEVEL_Y + CELL_SIZE * 1.5, calculateInitialCameraTargetZ())); 
  const cameraDistanceRef = useRef<number>(GRID_SIZE_Z * CELL_SIZE * 0.6); 
  const cameraPhiRef = useRef<number>(Math.PI / 3.5); 
  const cameraThetaRef = useRef<number>(0);      
  
  const isDraggingRef = useRef<boolean>(false); 
  const lastMousePosRef = useRef<{ x: number; y: number } | null>(null); 
  const dragStartMousePosRef = useRef<{ x: number; y: number } | null>(null); 
  
  const playerBaseMeshRef = useRef<THREE.Group | null>(null);
  const enemyBaseMeshRef = useRef<THREE.Group | null>(null);
  
  const environmentalStaticMeshesRef = useRef<THREE.Object3D[]>([]);
  const birdAnimationData = useRef<Map<string, BirdAnimData>>(new Map());
  const animalAnimationData = useRef<Map<string, AnimalAnimData>>(new Map());
  const lastFrameTimeRef = useRef<number>(performance.now());

  const lastValidPlacementCellRef = useRef<{ x: number; z: number } | null>(null);

  const onPlaceTowerRef = useRef(onPlaceTowerProp);
  const selectedTowerTypeRef = useRef(selectedTowerTypeProp);
  const gridRef = useRef(gridProp);

  const activeTouchModeRef = useRef<'none' | 'rotate' | 'zoom_pan'>('none');
  const lastPinchDistanceRef = useRef<number | null>(null);
  const lastPanMidpointRef = useRef<{ x: number; y: number } | null>(null);
  const touchDragStartPosRef = useRef<{ x: number; y: number } | null>(null);


  useEffect(() => { onPlaceTowerRef.current = onPlaceTowerProp; }, [onPlaceTowerProp]);
  useEffect(() => { 
    selectedTowerTypeRef.current = selectedTowerTypeProp;
    if (fullRowHighlightMeshRef.current) {
        fullRowHighlightMeshRef.current.visible = !!selectedTowerTypeProp;
    }
    if (!selectedTowerTypeProp && rangeIndicatorRef.current) {
        rangeIndicatorRef.current.visible = false;
    }
  }, [selectedTowerTypeProp]);
  useEffect(() => { gridRef.current = gridProp; }, [gridProp]);


  const updateCameraPosition = useCallback(() => {
    if (!cameraRef.current) return;
    const x = cameraTargetRef.current.x + cameraDistanceRef.current * Math.sin(cameraPhiRef.current) * Math.sin(cameraThetaRef.current);
    const y = cameraTargetRef.current.y + cameraDistanceRef.current * Math.cos(cameraPhiRef.current);
    const z = cameraTargetRef.current.z + cameraDistanceRef.current * Math.sin(cameraPhiRef.current) * Math.cos(cameraThetaRef.current);
    cameraRef.current.position.set(x, y, z);
    cameraRef.current.lookAt(cameraTargetRef.current);
  }, []);

  const updatePlacementHighlight = useCallback((clientX: number, clientY: number) => {
    if (!mountRef.current || !placementPlaneRef.current || !raycasterRef.current || !cameraRef.current || !placementHighlightRef.current || !rangeIndicatorRef.current || gridRef.current.length === 0) {
        if (placementHighlightRef.current) placementHighlightRef.current.visible = false;
        if (rangeIndicatorRef.current) rangeIndicatorRef.current.visible = false;
        lastValidPlacementCellRef.current = null;
        return;
    }

    const rect = mountRef.current.getBoundingClientRect();
    const canvasX = clientX - rect.left;
    const canvasY = clientY - rect.top;
    
    mouseRef.current.x = (canvasX / rect.width) * 2 - 1;
    mouseRef.current.y = -(canvasY / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersects = raycasterRef.current.intersectObject(placementPlaneRef.current);

    if (intersects.length > 0) {
        placementHighlightRef.current.visible = true;
        const intersectPoint = intersects[0].point;
        const gridX = Math.floor((intersectPoint.x + GRID_HALF_WIDTH) / CELL_SIZE);
        const gridZ = Math.floor((intersectPoint.z + GRID_HALF_DEPTH) / CELL_SIZE);
        
        const cellCenterX = gridX * CELL_SIZE - GRID_HALF_WIDTH + CELL_SIZE / 2;
        const cellCenterZ = gridZ * CELL_SIZE - GRID_HALF_DEPTH + CELL_SIZE / 2;

        placementHighlightRef.current.position.set(cellCenterX, GROUND_LEVEL_Y + 0.05, cellCenterZ);
        
        const towerSpec = TOWER_SPECS[selectedTowerTypeRef.current!];
        const range = towerSpec.range;
        rangeIndicatorRef.current.scale.set(range, range, 1);
        rangeIndicatorRef.current.position.x = cellCenterX;
        rangeIndicatorRef.current.position.z = cellCenterZ;
        rangeIndicatorRef.current.visible = true;

        if (gridX >= 0 && gridX < GRID_SIZE_X && gridZ >= 0 && gridZ < GRID_SIZE_Z) {
            if (gridZ === PLAYER_BASE_POSITION_GRID_Z) {
                const currentGridCell = gridRef.current[gridX]?.[gridZ];
                const isCellOccupiable = currentGridCell ? !currentGridCell.isOccupied : false;

                if (isCellOccupiable) {
                    (placementHighlightRef.current.material as THREE.MeshBasicMaterial).color.set(PLACEMENT_ZONE_HIGHLIGHT_COLOR);
                    lastValidPlacementCellRef.current = { x: gridX, z: gridZ };
                } else {
                    (placementHighlightRef.current.material as THREE.MeshBasicMaterial).color.set(0xff0000);
                    lastValidPlacementCellRef.current = null;
                }
            } else {
                 (placementHighlightRef.current.material as THREE.MeshBasicMaterial).color.set(0xffff33);
                lastValidPlacementCellRef.current = null;
            }
        } else {
            (placementHighlightRef.current.material as THREE.MeshBasicMaterial).color.set(0xcccccc);
            lastValidPlacementCellRef.current = null;
        }
    } else {
        placementHighlightRef.current.visible = false;
        if (rangeIndicatorRef.current) rangeIndicatorRef.current.visible = false;
        lastValidPlacementCellRef.current = null;
    }
  }, []);


  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, GRID_SIZE_Z * CELL_SIZE * 5);
    cameraRef.current = camera;
    updateCameraPosition();


    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composerRef.current = composer;
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    const ssaoPass = new SSAOPass(scene, camera, mountRef.current.clientWidth, mountRef.current.clientHeight);
    ssaoPass.kernelRadius = 8; ssaoPass.minDistance = 0.002; ssaoPass.maxDistance = 5; 
    ssaoPass.output = SSAOPass.OUTPUT.Default; composer.addPass(ssaoPass); ssaoPassRef.current = ssaoPass;
    const outputPass = new OutputPass(); composer.addPass(outputPass);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9); scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
    directionalLight.position.set(GRID_SIZE_X, GRID_SIZE_Z * 1.5, GRID_SIZE_Z * 0.8);
    directionalLight.castShadow = true; directionalLight.shadow.mapSize.width = 2048; directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5; directionalLight.shadow.camera.far = GRID_SIZE_Z * CELL_SIZE * 3;
    directionalLight.shadow.camera.left = -GRID_SIZE_X * CELL_SIZE * 1.5; directionalLight.shadow.camera.right = GRID_SIZE_X * CELL_SIZE * 1.5;
    directionalLight.shadow.camera.top = GRID_SIZE_Z * CELL_SIZE * 1.5; directionalLight.shadow.camera.bottom = -GRID_SIZE_Z * CELL_SIZE * 1.5;
    scene.add(directionalLight);

    const skyGeo = new THREE.SphereGeometry(camera.far * 0.8, 32, 15); 
    const skyVertexShader = ` varying vec3 vViewDirection; void main() { vec4 worldPosition = modelMatrix * vec4(position, 1.0); vViewDirection = normalize(worldPosition.xyz - cameraPosition); gl_Position = projectionMatrix * viewMatrix * worldPosition; } `;
    const skyFragmentShader = ` uniform vec3 uTopColor; uniform vec3 uHorizonColor; varying vec3 vViewDirection; void main() { float gradientStart = -0.1; float gradientEnd = 0.4; float t = clamp((vViewDirection.y - gradientStart) / (gradientEnd - gradientStart), 0.0, 1.0); t = pow(t, 1.0); gl_FragColor = vec4(mix(uHorizonColor, uTopColor, t), 1.0); } `;
    const skyMat = new THREE.ShaderMaterial({ uniforms: { uTopColor: { value: new THREE.Color(SKY_TOP_COLOR_HEX) }, uHorizonColor: { value: new THREE.Color(SKY_HORIZON_COLOR_HEX) }, }, vertexShader: skyVertexShader, fragmentShader: skyFragmentShader, side: THREE.BackSide, depthWrite: false, fog: false, });
    skyboxMeshRef.current = new THREE.Mesh(skyGeo, skyMat); skyboxMeshRef.current.renderOrder = -1; skyboxMeshRef.current.raycast = () => {}; scene.add(skyboxMeshRef.current);
    
    const groundGeo = new THREE.PlaneGeometry(GRID_SIZE_X * CELL_SIZE, GRID_SIZE_Z * CELL_SIZE);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x558855, side: THREE.DoubleSide });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2; groundMesh.position.y = GROUND_LEVEL_Y; groundMesh.receiveShadow = true; scene.add(groundMesh);
    
    const placementPlaneZ = (PLAYER_BASE_POSITION_GRID_Z * CELL_SIZE) - GRID_HALF_DEPTH + (CELL_SIZE / 2);
    placementPlaneRef.current = new THREE.Mesh( new THREE.PlaneGeometry(GRID_SIZE_X * CELL_SIZE, CELL_SIZE), new THREE.MeshBasicMaterial({ color: 0x00aa00, transparent: true, opacity: 0.0, side: THREE.DoubleSide, depthTest: true }) );
    placementPlaneRef.current.rotation.x = -Math.PI / 2; placementPlaneRef.current.position.set(0, GROUND_LEVEL_Y + 0.01, placementPlaneZ); scene.add(placementPlaneRef.current);

    fullRowHighlightMeshRef.current = new THREE.Mesh( new THREE.PlaneGeometry(GRID_SIZE_X * CELL_SIZE, CELL_SIZE), new THREE.MeshBasicMaterial({ color: PLACEMENT_ZONE_HIGHLIGHT_COLOR, transparent: true, opacity: 0.1, side: THREE.DoubleSide }) );
    fullRowHighlightMeshRef.current.rotation.x = -Math.PI / 2; fullRowHighlightMeshRef.current.position.set(0, GROUND_LEVEL_Y + 0.005, placementPlaneZ); fullRowHighlightMeshRef.current.visible = false; scene.add(fullRowHighlightMeshRef.current);

    placementHighlightRef.current = new THREE.Mesh( new THREE.BoxGeometry(CELL_SIZE * 0.95, 0.1, CELL_SIZE * 0.95), new THREE.MeshBasicMaterial({ color: PLACEMENT_ZONE_HIGHLIGHT_COLOR, transparent: true, opacity: 0.6 }) );
    placementHighlightRef.current.visible = false; scene.add(placementHighlightRef.current);

    const rangeIndicatorGeo = new THREE.CircleGeometry(1, 32); 
    const rangeIndicatorMat = new THREE.MeshBasicMaterial({ color: RANGE_INDICATOR_COLOR, transparent: true, opacity: RANGE_INDICATOR_OPACITY, side: THREE.DoubleSide, depthTest: false, });
    rangeIndicatorRef.current = new THREE.Mesh(rangeIndicatorGeo, rangeIndicatorMat);
    rangeIndicatorRef.current.rotation.x = -Math.PI / 2; rangeIndicatorRef.current.position.y = RANGE_INDICATOR_Y_OFFSET; rangeIndicatorRef.current.visible = false; scene.add(rangeIndicatorRef.current);

    playerBaseMeshRef.current = createPlayerBaseMesh(playerBasePosition); scene.add(playerBaseMeshRef.current);
    enemyBaseMeshRef.current = createEnemyBaseMesh(enemyBasePosition); scene.add(enemyBaseMeshRef.current);

    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(MAX_TOTAL_PARTICLES * 3);
    const colors = new Float32Array(MAX_TOTAL_PARTICLES * 3);
    const sizes = new Float32Array(MAX_TOTAL_PARTICLES);
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3)); 
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    particleGeometry.drawRange = { start: 0, count: 0 };
    const particleMaterial = new THREE.ShaderMaterial({
        uniforms: { pointTexture: { value: new THREE.TextureLoader().load('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="white"/></svg>') }},
        vertexShader: ` attribute float size; attribute vec3 customColor; varying vec3 vColor; void main() { vColor = customColor; vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 ); gl_PointSize = size * ( 300.0 / -mvPosition.z ); gl_Position = projectionMatrix * mvPosition; } `,
        fragmentShader: ` uniform sampler2D pointTexture; varying vec3 vColor; void main() { gl_FragColor = vec4( vColor, 1.0 ); gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord ); } `,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, vertexColors: true, 
    });
    consolidatedParticlesMeshRef.current = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(consolidatedParticlesMeshRef.current);

    if (inactiveUnitMeshPoolsRef.current.size === 0) {
        (['PLAYER', 'ENEMY'] as UnitOwner[]).forEach(owner => {
            const ownerMap = new Map<UnitType, THREE.Group[]>();
            Object.values(UnitType).forEach(uType => { ownerMap.set(uType, []); });
            inactiveUnitMeshPoolsRef.current.set(owner, ownerMap);
        });
    }
    if (inactiveProjectileMeshPoolRef.current.size === 0) {
        const allProjectileTypes: (TowerType | UnitType)[] = [...Object.values(TowerType), ...Object.values(UnitType)];
        allProjectileTypes.forEach(projType => {
            inactiveProjectileMeshPoolRef.current.set(projType, []);
        });
    }


    environmentalStaticMeshesRef.current = createEnvironmentalMeshes(scene, birdAnimationData, animalAnimationData);
    lastFrameTimeRef.current = performance.now();

    const handleResize = () => {
      if (cameraRef.current && rendererRef.current && mountRef.current && composerRef.current && ssaoPassRef.current) {
        const width = mountRef.current.clientWidth; const height = mountRef.current.clientHeight;
        cameraRef.current.aspect = width / height; cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height); composerRef.current.setSize(width, height); ssaoPassRef.current.setSize(width, height);
      }
    };
    window.addEventListener('resize', handleResize);

    const handleMouseDown = (event: MouseEvent) => { if (event.button === 0 || event.button === 2) { isDraggingRef.current = true; lastMousePosRef.current = { x: event.clientX, y: event.clientY }; dragStartMousePosRef.current = { x: event.clientX, y: event.clientY }; } };
    const handleMouseUp = (event: MouseEvent) => {
        const currentOnPlaceTower = onPlaceTowerRef.current; const currentSelectedTowerType = selectedTowerTypeRef.current;
        if (event.button === 0 && lastValidPlacementCellRef.current && currentSelectedTowerType) { if (!isDraggingRef.current || (dragStartMousePosRef.current && Math.sqrt(Math.pow(event.clientX - dragStartMousePosRef.current.x, 2) + Math.pow(event.clientY - dragStartMousePosRef.current.y, 2)) < CAMERA_DRAG_THRESHOLD)) { currentOnPlaceTower(lastValidPlacementCellRef.current); } }
        isDraggingRef.current = false; lastMousePosRef.current = null; dragStartMousePosRef.current = null;
    };
    const handleMouseMove = (event: MouseEvent) => {
        if (!mountRef.current) return; 
        if (isDraggingRef.current && lastMousePosRef.current && cameraRef.current) {
            const deltaX = event.clientX - lastMousePosRef.current.x; const deltaY = event.clientY - lastMousePosRef.current.y; let cameraUpdated = false;
            if (event.buttons === 1) { cameraThetaRef.current += deltaX * ROTATION_SENSITIVITY; cameraPhiRef.current = Math.max(MIN_CAMERA_PHI, Math.min(MAX_CAMERA_PHI, cameraPhiRef.current + deltaY * ROTATION_SENSITIVITY)); cameraUpdated = true;
            } else if (event.buttons === 2) { const camera = cameraRef.current; const panSpeed = PAN_SENSITIVITY_FACTOR * cameraDistanceRef.current; const camRight = new THREE.Vector3();  const camUp = new THREE.Vector3(); camera.matrixWorld.extractBasis(camRight, camUp, new THREE.Vector3()); cameraTargetRef.current.addScaledVector(camRight, -deltaX * panSpeed); cameraTargetRef.current.addScaledVector(camUp, deltaY * panSpeed); cameraUpdated = true; }
            if (cameraUpdated) { updateCameraPosition(); }
            lastMousePosRef.current = { x: event.clientX, y: event.clientY };
        }
        if (selectedTowerTypeRef.current) {
            updatePlacementHighlight(event.clientX, event.clientY);
        } else {
             if (placementHighlightRef.current) placementHighlightRef.current.visible = false;
             if (rangeIndicatorRef.current) rangeIndicatorRef.current.visible = false;
             lastValidPlacementCellRef.current = null;
        }
    };
    const handleContextMenu = (event: MouseEvent) => event.preventDefault();
    const handleWheel = (event: WheelEvent) => { cameraDistanceRef.current = Math.max(MIN_CAMERA_DISTANCE, Math.min(MAX_CAMERA_DISTANCE, cameraDistanceRef.current + event.deltaY * ZOOM_SENSITIVITY)); updateCameraPosition(); };
    
    const handleTouchStart = (event: TouchEvent) => {
        event.preventDefault();
        if (!mountRef.current) return;
        const touches = event.touches;
        if (touches.length === 1) {
            activeTouchModeRef.current = 'rotate';
            lastMousePosRef.current = { x: touches[0].clientX, y: touches[0].clientY };
            touchDragStartPosRef.current = { x: touches[0].clientX, y: touches[0].clientY };
            if (selectedTowerTypeRef.current) {
                updatePlacementHighlight(touches[0].clientX, touches[0].clientY);
            }
        } else if (touches.length === 2) {
            activeTouchModeRef.current = 'zoom_pan';
            lastPinchDistanceRef.current = getTouchDistance(touches[0], touches[1]);
            lastPanMidpointRef.current = getTouchMidpoint(touches[0], touches[1]);
            isDraggingRef.current = false; 
            if (placementHighlightRef.current) placementHighlightRef.current.visible = false;
            if (rangeIndicatorRef.current) rangeIndicatorRef.current.visible = false;
        } else {
            activeTouchModeRef.current = 'none';
        }
    };
    const handleTouchMove = (event: TouchEvent) => {
        event.preventDefault();
        if (!mountRef.current || !cameraRef.current) return;
        const touches = event.touches;

        if (activeTouchModeRef.current === 'rotate' && touches.length === 1) {
            if (lastMousePosRef.current) {
                const touch = touches[0];
                const deltaX = touch.clientX - lastMousePosRef.current.x;
                const deltaY = touch.clientY - lastMousePosRef.current.y;
                if (selectedTowerTypeRef.current) {
                    updatePlacementHighlight(touch.clientX, touch.clientY);
                }
                cameraThetaRef.current += deltaX * ROTATION_SENSITIVITY_TOUCH;
                cameraPhiRef.current = Math.max(MIN_CAMERA_PHI, Math.min(MAX_CAMERA_PHI, cameraPhiRef.current + deltaY * ROTATION_SENSITIVITY_TOUCH));
                updateCameraPosition();
                lastMousePosRef.current = { x: touch.clientX, y: touch.clientY };
            }
        } else if (activeTouchModeRef.current === 'zoom_pan' && touches.length === 2) {
            if (lastPinchDistanceRef.current !== null && lastPanMidpointRef.current) {
                const touch1 = touches[0]; const touch2 = touches[1];
                const currentPinchDistance = getTouchDistance(touch1, touch2);
                const deltaDistance = currentPinchDistance - lastPinchDistanceRef.current;
                cameraDistanceRef.current = Math.max(MIN_CAMERA_DISTANCE, Math.min(MAX_CAMERA_DISTANCE, cameraDistanceRef.current - deltaDistance * ZOOM_SENSITIVITY_TOUCH));
                lastPinchDistanceRef.current = currentPinchDistance;

                const currentPanMidpoint = getTouchMidpoint(touch1, touch2);
                const panDeltaX = currentPanMidpoint.x - lastPanMidpointRef.current.x;
                const panDeltaY = currentPanMidpoint.y - lastPanMidpointRef.current.y;
                const camera = cameraRef.current;
                const panSpeed = PAN_SENSITIVITY_TOUCH_FACTOR * cameraDistanceRef.current;
                const camRight = new THREE.Vector3(); const camUp = new THREE.Vector3();
                camera.matrixWorld.extractBasis(camRight, camUp, new THREE.Vector3());
                cameraTargetRef.current.addScaledVector(camRight, -panDeltaX * panSpeed);
                cameraTargetRef.current.addScaledVector(camUp, panDeltaY * panSpeed);
                lastPanMidpointRef.current = currentPanMidpoint;
                
                updateCameraPosition();
                if (placementHighlightRef.current) placementHighlightRef.current.visible = false;
                if (rangeIndicatorRef.current) rangeIndicatorRef.current.visible = false;
            }
        }
    };
    const handleTouchEnd = (event: TouchEvent) => {
        event.preventDefault();
        if (!mountRef.current) return;
        const touches = event.touches; 
        const currentOnPlaceTower = onPlaceTowerRef.current;

        if (activeTouchModeRef.current === 'rotate' && event.changedTouches.length > 0 && touches.length === 0 && selectedTowerTypeRef.current && touchDragStartPosRef.current && lastValidPlacementCellRef.current) {
            const endX = event.changedTouches[0].clientX; const endY = event.changedTouches[0].clientY;
            const dragDistance = Math.sqrt(Math.pow(endX - touchDragStartPosRef.current.x, 2) + Math.pow(endY - touchDragStartPosRef.current.y, 2));
            if (dragDistance < CAMERA_DRAG_THRESHOLD) {
                currentOnPlaceTower(lastValidPlacementCellRef.current);
            }
        }

        if (touches.length === 0) {
            activeTouchModeRef.current = 'none';
            lastMousePosRef.current = null; touchDragStartPosRef.current = null;
            lastPinchDistanceRef.current = null; lastPanMidpointRef.current = null;
            if (!selectedTowerTypeRef.current) { 
                if (placementHighlightRef.current) placementHighlightRef.current.visible = false;
                if (rangeIndicatorRef.current) rangeIndicatorRef.current.visible = false;
            } else {
            }
        } else if (touches.length === 1) {
            activeTouchModeRef.current = 'rotate';
            lastMousePosRef.current = { x: touches[0].clientX, y: touches[0].clientY };
            touchDragStartPosRef.current = { x: touches[0].clientX, y: touches[0].clientY };
            lastPinchDistanceRef.current = null; lastPanMidpointRef.current = null;
            if (selectedTowerTypeRef.current) { 
                updatePlacementHighlight(touches[0].clientX, touches[0].clientY);
            }
        } else if (touches.length >= 2) { 
            activeTouchModeRef.current = 'zoom_pan';
            lastPinchDistanceRef.current = getTouchDistance(touches[0], touches[1]);
            lastPanMidpointRef.current = getTouchMidpoint(touches[0], touches[1]);
            if (placementHighlightRef.current) placementHighlightRef.current.visible = false;
            if (rangeIndicatorRef.current) rangeIndicatorRef.current.visible = false;
        }
    };


    const currentMount = mountRef.current;
    currentMount.addEventListener('mousedown', handleMouseDown); currentMount.addEventListener('mouseup', handleMouseUp);
    currentMount.addEventListener('mousemove', handleMouseMove); currentMount.addEventListener('wheel', handleWheel);
    currentMount.addEventListener('contextmenu', handleContextMenu);
    currentMount.addEventListener('touchstart', handleTouchStart, { passive: false });
    currentMount.addEventListener('touchmove', handleTouchMove, { passive: false });
    currentMount.addEventListener('touchend', handleTouchEnd, { passive: false });
    currentMount.addEventListener('touchcancel', handleTouchEnd, { passive: false });


    const animate = () => {
      requestAnimationFrame(animate);
      const currentTime = performance.now();
      const deltaTime = (currentTime - lastFrameTimeRef.current) / 1000;
      lastFrameTimeRef.current = currentTime;

      birdAnimationData.current.forEach((data) => {
        data.angle += data.speed * deltaTime;
        const newX = data.orbitCenter.x + data.radius * Math.cos(data.angle);
        const newZ = data.orbitCenter.z + data.radius * Math.sin(data.angle);
        data.mesh.position.set(newX, data.height, newZ);
        const lookAtX = data.orbitCenter.x + data.radius * Math.cos(data.angle + 0.1); 
        const lookAtZ = data.orbitCenter.z + data.radius * Math.sin(data.angle + 0.1);
        data.mesh.lookAt(lookAtX, data.height, lookAtZ);
        data.mesh.rotation.x = data.initialPitch; 
      });

      animalAnimationData.current.forEach((data) => {
        data.timeUntilNewTargetMs -= deltaTime * 1000;
        if (data.timeUntilNewTargetMs <= 0) {
            if (Math.random() > ANIMAL_PAUSE_CHANCE) {
                data.isMoving = true;
                const newTargetAngle = Math.random() * Math.PI * 2;
                const newTargetDist = Math.random() * ANIMAL_WANDER_DISTANCE_FROM_ORIGIN;
                data.currentWanderTarget = new THREE.Vector3( data.origin.x + Math.cos(newTargetAngle) * newTargetDist, data.origin.y, data.origin.z + Math.sin(newTargetAngle) * newTargetDist );
            } else {
                data.isMoving = false; data.currentWanderTarget = null;
            }
            data.timeUntilNewTargetMs = ANIMAL_WANDER_TARGET_CHANGE_MIN_MS + Math.random() * (ANIMAL_WANDER_TARGET_CHANGE_MAX_MS - ANIMAL_WANDER_TARGET_CHANGE_MIN_MS);
        }
        if (data.isMoving && data.currentWanderTarget) {
            const direction = data.currentWanderTarget.clone().sub(data.mesh.position);
            const distance = direction.length();
            if (distance > ANIMAL_STOPPING_DISTANCE) {
                direction.normalize();
                data.mesh.position.addScaledVector(direction, ANIMAL_MOVE_SPEED_UNITS_PER_SEC * deltaTime);
                const targetRotationY = Math.atan2(direction.x, direction.z);
                data.mesh.rotation.y = THREE.MathUtils.lerp(data.mesh.rotation.y, targetRotationY, ANIMAL_TURN_LERP_FACTOR);
            } else {
                data.isMoving = false; data.timeUntilNewTargetMs = 0; 
            }
        }
      });
      
      if (composerRef.current) { composerRef.current.render();
      } else if (rendererRef.current && sceneRef.current && cameraRef.current) { rendererRef.current.render(sceneRef.current, cameraRef.current); }
    };
    animate();

    return () => {
      currentMount.removeEventListener('mousedown', handleMouseDown); currentMount.removeEventListener('mouseup', handleMouseUp);
      currentMount.removeEventListener('mousemove', handleMouseMove); currentMount.removeEventListener('wheel', handleWheel);
      currentMount.removeEventListener('contextmenu', handleContextMenu); 
      currentMount.removeEventListener('touchstart', handleTouchStart); currentMount.removeEventListener('touchmove', handleTouchMove);
      currentMount.removeEventListener('touchend', handleTouchEnd); currentMount.removeEventListener('touchcancel', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      
      environmentalStaticMeshesRef.current.forEach(envMesh => {
        sceneRef.current?.remove(envMesh);
        envMesh.traverse(child => { if (child instanceof THREE.Mesh) { child.geometry.dispose(); if (Array.isArray(child.material)) child.material.forEach(mat => mat.dispose()); else if (child.material instanceof THREE.Material) child.material.dispose(); } });
      });
      environmentalStaticMeshesRef.current = [];

      birdAnimationData.current.forEach(data => {
        sceneRef.current?.remove(data.mesh); data.mesh.geometry.dispose();
        if (data.mesh.material instanceof THREE.Material) data.mesh.material.dispose();
      });
      birdAnimationData.current.clear();

      animalAnimationData.current.forEach(data => {
        sceneRef.current?.remove(data.mesh);
        data.mesh.traverse(child => { if (child instanceof THREE.Mesh) { child.geometry.dispose(); if (child.material instanceof THREE.Material) child.material.dispose(); }});
      });
      animalAnimationData.current.clear();

      if (skyboxMeshRef.current) { sceneRef.current?.remove(skyboxMeshRef.current); skyboxMeshRef.current.geometry.dispose(); if (skyboxMeshRef.current.material instanceof THREE.Material) { (skyboxMeshRef.current.material as THREE.ShaderMaterial).dispose(); } skyboxMeshRef.current = null; }
      
      ssaoPassRef.current?.dispose(); composerRef.current?.dispose(); 

      if (rendererRef.current) { rendererRef.current.dispose(); if (rendererRef.current.domElement.parentNode === mountRef.current) { mountRef.current?.removeChild(rendererRef.current.domElement); } }
      
      towerMeshesRef.current.forEach(mesh => { sceneRef.current?.remove(mesh); disposeMeshGroup(mesh);});
      towerMeshesRef.current.clear();

      playerUnitMeshesRef.current.forEach(mesh => { sceneRef.current?.remove(mesh); disposeMeshGroup(mesh);});
      playerUnitMeshesRef.current.clear();
      enemyUnitMeshesRef.current.forEach(mesh => { sceneRef.current?.remove(mesh); disposeMeshGroup(mesh);});
      enemyUnitMeshesRef.current.clear();
      
      inactiveUnitMeshPoolsRef.current.forEach(ownerMap => {
          ownerMap.forEach(pool => { pool.forEach(mesh => { disposeMeshGroup(mesh); }); });
      });
      inactiveUnitMeshPoolsRef.current.clear();

      unitProjectileMeshGroupsRef.current.forEach(group => {
        sceneRef.current?.remove(group);
        disposeMeshGroup(group); 
      });
      unitProjectileMeshGroupsRef.current.clear();

      inactiveProjectileMeshPoolRef.current.forEach(pool => {
          pool.forEach(group => { disposeMeshGroup(group); });
      });
      inactiveProjectileMeshPoolRef.current.clear();
      
      if (consolidatedParticlesMeshRef.current) {
          sceneRef.current?.remove(consolidatedParticlesMeshRef.current);
          consolidatedParticlesMeshRef.current.geometry.dispose();
          const mat = consolidatedParticlesMeshRef.current.material as THREE.ShaderMaterial;
          (mat.uniforms.pointTexture.value as THREE.Texture)?.dispose();
          mat.dispose();
          consolidatedParticlesMeshRef.current = null;
      }
      
      fireAreaMeshesRef.current.forEach(mesh => { sceneRef.current?.remove(mesh); mesh.geometry.dispose(); if (mesh.material instanceof THREE.Material) mesh.material.dispose(); });
      fireAreaMeshesRef.current.clear();

      healthBarMeshesRef.current.forEach(mesh => { sceneRef.current?.remove(mesh); disposeMeshGroup(mesh);});
      healthBarMeshesRef.current.clear();
      inactiveHealthBarMeshPoolRef.current.forEach(mesh => { disposeMeshGroup(mesh); });
      inactiveHealthBarMeshPoolRef.current = [];

      if (playerBaseMeshRef.current) { sceneRef.current?.remove(playerBaseMeshRef.current); disposeMeshGroup(playerBaseMeshRef.current);}
      if (enemyBaseMeshRef.current) { sceneRef.current?.remove(enemyBaseMeshRef.current); disposeMeshGroup(enemyBaseMeshRef.current);}
      if (placementPlaneRef.current) { sceneRef.current?.remove(placementPlaneRef.current); placementPlaneRef.current.geometry.dispose(); if (placementPlaneRef.current.material instanceof THREE.Material) (placementPlaneRef.current.material as THREE.Material).dispose(); }
      if (placementHighlightRef.current) { sceneRef.current?.remove(placementHighlightRef.current); placementHighlightRef.current.geometry.dispose(); if (placementHighlightRef.current.material instanceof THREE.Material) (placementHighlightRef.current.material as THREE.Material).dispose(); }
      if (rangeIndicatorRef.current) { sceneRef.current?.remove(rangeIndicatorRef.current); rangeIndicatorRef.current.geometry.dispose(); if (rangeIndicatorRef.current.material instanceof THREE.Material) (rangeIndicatorRef.current.material as THREE.Material).dispose(); }
      if (fullRowHighlightMeshRef.current) { sceneRef.current?.remove(fullRowHighlightMeshRef.current); fullRowHighlightMeshRef.current.geometry.dispose(); if (fullRowHighlightMeshRef.current.material instanceof THREE.Material) (fullRowHighlightMeshRef.current.material as THREE.Material).dispose(); }

      sceneRef.current = null;
    };
  }, [updateCameraPosition, playerBasePosition, enemyBasePosition, updatePlacementHighlight]); 

  useEffect(() => { 
    if (!sceneRef.current) return;
    const scene = sceneRef.current;
    const currentMeshIds = new Set<string>();
    towers.forEach(tower => {
      currentMeshIds.add(tower.id);
      let meshGroup = towerMeshesRef.current.get(tower.id);
      if (!meshGroup) {
        meshGroup = createTowerMesh(tower.type, TOWER_SPECS[tower.type]);
        scene.add(meshGroup);
        towerMeshesRef.current.set(tower.id, meshGroup);
      }
      meshGroup.position.set(tower.position.x, tower.position.y, tower.position.z);
      const turret = meshGroup.getObjectByName("turret");
      if (turret && tower.rotationY !== undefined) {
        turret.rotation.y = tower.rotationY;
      }
    });
    towerMeshesRef.current.forEach((mesh, id) => {
      if (!currentMeshIds.has(id)) {
        scene.remove(mesh);
        disposeMeshGroup(mesh);
        towerMeshesRef.current.delete(id);
      }
    });
  }, [towers]);

  useEffect(() => {
    if (!sceneRef.current || !inactiveUnitMeshPoolsRef.current.get('PLAYER')) return;
    const scene = sceneRef.current;
    const currentMeshIds = new Set<string>();
    playerUnits.forEach(unit => {
        currentMeshIds.add(unit.id);
        let meshGroup = playerUnitMeshesRef.current.get(unit.id);
        const unitSpec = UNIT_SPECS[unit.type];
        if (!meshGroup) {
            const pool = inactiveUnitMeshPoolsRef.current.get('PLAYER')?.get(unit.type);
            if (pool && pool.length > 0) {
                meshGroup = pool.pop()!; 
                scene.add(meshGroup); 
            } else {
                meshGroup = createUnitMesh(unit.type, 'PLAYER', unitSpec); scene.add(meshGroup);
            }
            meshGroup.visible = true; 
            playerUnitMeshesRef.current.set(unit.id, meshGroup);
        }
        meshGroup.position.set(unit.position.x, unit.position.y, unit.position.z);
        if (unit.rotationY !== undefined) { meshGroup.rotation.y = unit.rotationY; }
        const isActuallyDetected = detectedByEnemy.has(unit.id);
        const colorMultiplier = isActuallyDetected ? 1.0 : UNDETECTED_PLAYER_UNIT_COLOR_MULTIPLIER;
        meshGroup.traverse(child => {
            if (child instanceof THREE.Mesh && child.userData.originalColor) {
                const original = child.userData.originalColor as THREE.Color;
                (child.material as THREE.MeshStandardMaterial).color.set(original).multiplyScalar(colorMultiplier);
                (child.material as THREE.MeshStandardMaterial).needsUpdate = true;
            }
        });
    });
    playerUnitMeshesRef.current.forEach((mesh, id) => {
        if (!currentMeshIds.has(id)) { 
            mesh.visible = false; 
            scene.remove(mesh);
            const unitType = mesh.userData.unitType as UnitType;
            const owner = mesh.userData.owner as UnitOwner;
            const pool = inactiveUnitMeshPoolsRef.current.get(owner)?.get(unitType);
            if (pool) pool.push(mesh);
            else console.warn("Pool not found for player unit type:", unitType);
            playerUnitMeshesRef.current.delete(id);
        }
    });
  }, [playerUnits, detectedByEnemy]);

  useEffect(() => {
    if (!sceneRef.current || !inactiveUnitMeshPoolsRef.current.get('ENEMY')) return;
    const scene = sceneRef.current;
    const currentMeshIds = new Set<string>();
    enemyUnits.forEach(unit => {
        currentMeshIds.add(unit.id);
        let meshGroup = enemyUnitMeshesRef.current.get(unit.id);
        const unitSpec = UNIT_SPECS[unit.type];
        if (!meshGroup) {
            const pool = inactiveUnitMeshPoolsRef.current.get('ENEMY')?.get(unit.type);
            if (pool && pool.length > 0) {
                meshGroup = pool.pop()!; 
                scene.add(meshGroup);
            } else {
                meshGroup = createUnitMesh(unit.type, 'ENEMY', unitSpec); scene.add(meshGroup);
            }
            meshGroup.visible = true; 
            enemyUnitMeshesRef.current.set(unit.id, meshGroup);
        }
        meshGroup.position.set(unit.position.x, unit.position.y, unit.position.z);
        if (unit.rotationY !== undefined) { meshGroup.rotation.y = unit.rotationY; }
        const isActuallyDetected = detectedByPlayer.has(unit.id);
        const colorMultiplier = isActuallyDetected ? 1.0 : UNDETECTED_ENEMY_UNIT_COLOR_MULTIPLIER;
        meshGroup.traverse(child => {
            if (child instanceof THREE.Mesh && child.userData.originalColor) {
                const original = child.userData.originalColor as THREE.Color;
                (child.material as THREE.MeshStandardMaterial).color.set(original).multiplyScalar(colorMultiplier);
                (child.material as THREE.MeshStandardMaterial).needsUpdate = true;
            }
        });
    });
    enemyUnitMeshesRef.current.forEach((mesh, id) => {
        if (!currentMeshIds.has(id)) {
            mesh.visible = false; 
            scene.remove(mesh);
            const unitType = mesh.userData.unitType as UnitType;
            const owner = mesh.userData.owner as UnitOwner;
            const pool = inactiveUnitMeshPoolsRef.current.get(owner)?.get(unitType);
            if (pool) pool.push(mesh);
            else console.warn("Pool not found for enemy unit type:", unitType);
            enemyUnitMeshesRef.current.delete(id);
        }
    });
  }, [enemyUnits, detectedByPlayer]);


  useEffect(() => { 
    if (playerBaseMeshRef.current) {
        const isPlayerBaseDetected = detectedByEnemy.has(PLAYER_BASE_ID);
        const playerBaseColorMultiplier = isPlayerBaseDetected ? 1.0 : UNDETECTED_BASE_COLOR_MULTIPLIER;
        playerBaseMeshRef.current.traverse(child => {
            if (child instanceof THREE.Mesh && child.userData.originalColor) {
                const original = child.userData.originalColor as THREE.Color;
                (child.material as THREE.MeshStandardMaterial).color.set(original).multiplyScalar(playerBaseColorMultiplier);
                (child.material as THREE.MeshStandardMaterial).needsUpdate = true;
            }
        });
    }
    if (enemyBaseMeshRef.current) {
        const isEnemyBaseDetected = detectedByPlayer.has(ENEMY_BASE_ID);
        const enemyBaseColorMultiplier = isEnemyBaseDetected ? 1.0 : UNDETECTED_BASE_COLOR_MULTIPLIER;
        enemyBaseMeshRef.current.traverse(child => {
            if (child instanceof THREE.Mesh && child.userData.originalColor) {
                const original = child.userData.originalColor as THREE.Color;
                (child.material as THREE.MeshStandardMaterial).color.set(original).multiplyScalar(enemyBaseColorMultiplier);
                (child.material as THREE.MeshStandardMaterial).needsUpdate = true;
            }
        });
    }
  }, [detectedByPlayer, detectedByEnemy]);

  useEffect(() => { 
    if (!sceneRef.current || !inactiveProjectileMeshPoolRef.current) return;
    const scene = sceneRef.current;
    const currentMeshIds = new Set<string>();

    unitProjectiles.forEach(p => {
      currentMeshIds.add(p.id);
      let group = unitProjectileMeshGroupsRef.current.get(p.id);

      if (!group) {
        const pool = inactiveProjectileMeshPoolRef.current.get(p.projectileType);
        if (pool && pool.length > 0) {
          group = pool.pop()!;
        } else {
          group = createUnitProjectileMeshGroup(p.projectileType, p.owner);
        }
        scene.add(group);
        unitProjectileMeshGroupsRef.current.set(p.id, group);
      }
      
      group.visible = true;
      const pointLight = group.userData.pointLight as THREE.PointLight | undefined;
      if (pointLight) pointLight.intensity = p.projectileType === TowerType.LASER ? 0 : (p.projectileType === UnitType.GRENADIER ? 0 : (p.projectileType === TowerType.MACHINE_GUN || p.projectileType === UnitType.INFANTRY ? 5.0 : 8.0));


      if (p.projectileType === TowerType.LASER) {
        const laserMesh = group.getObjectByName("laser_beam") as THREE.Mesh | undefined;
        if (laserMesh) {
            if (p.targetPosition && p.laserEndTime && performance.now() < p.laserEndTime) {
              laserMesh.visible = true; 
              const start = new THREE.Vector3(p.position.x, p.position.y, p.position.z);
              const end = new THREE.Vector3(p.targetPosition.x, p.targetPosition.y, p.targetPosition.z);
              const distance = start.distanceTo(end);
              
              group.position.copy(start).lerp(end, 0.5);
              group.lookAt(end);
              
              laserMesh.scale.set(1, distance, 1); 
              laserMesh.rotation.x = Math.PI / 2; 
              laserMesh.position.set(0,0,0); 
            } else {
              laserMesh.visible = false; 
              group.visible = false; 
              if (pointLight) pointLight.intensity = 0;
            }
        }
      } else {
        group.position.set(p.position.x, p.position.y, p.position.z);
        if (p.velocity.x !== 0 || p.velocity.y !== 0 || p.velocity.z !== 0) {
          group.lookAt(p.position.x + p.velocity.x, p.position.y + p.velocity.y, p.position.z + p.velocity.z);
        }
      }
    });

    unitProjectileMeshGroupsRef.current.forEach((group, id) => {
      if (!currentMeshIds.has(id)) {
        group.visible = false;
        const pointLight = group.userData.pointLight as THREE.PointLight | undefined;
        if (pointLight) pointLight.intensity = 0;
        scene.remove(group);
        
        const projectileType = group.userData.projectileType as TowerType | UnitType;
        const pool = inactiveProjectileMeshPoolRef.current.get(projectileType);
        if (pool) {
          pool.push(group);
        } else {
          console.warn(`No pool for projectile type ${projectileType} during cleanup.`);
          disposeMeshGroup(group);
        }
        unitProjectileMeshGroupsRef.current.delete(id);
      }
    });
  }, [unitProjectiles]);

  useEffect(() => {
    if (!sceneRef.current || !consolidatedParticlesMeshRef.current) return;
    const mesh = consolidatedParticlesMeshRef.current;
    const geometry = mesh.geometry as THREE.BufferGeometry;
    const positionAttribute = geometry.attributes.position as THREE.BufferAttribute;
    const colorAttribute = geometry.attributes.customColor as THREE.BufferAttribute; 
    const sizeAttribute = geometry.attributes.size as THREE.BufferAttribute;
    const numActiveParticles = Math.min(particles.length, MAX_TOTAL_PARTICLES);
    for (let i = 0; i < numActiveParticles; i++) {
        const particle = particles[i];
        positionAttribute.setXYZ(i, particle.position.x, particle.position.y, particle.position.z);
        const color = new THREE.Color(particle.color);
        colorAttribute.setXYZ(i, color.r, color.g, color.b);
        sizeAttribute.setX(i, particle.currentSize);
    }
    geometry.drawRange.count = numActiveParticles;
    positionAttribute.needsUpdate = true; colorAttribute.needsUpdate = true; sizeAttribute.needsUpdate = true;
    mesh.visible = numActiveParticles > 0;
  }, [particles]);

  useEffect(() => {
    if (!sceneRef.current) return;
    const scene = sceneRef.current;
    const currentAreaIds = new Set<string>();
    activeFireAreas.forEach(area => {
        currentAreaIds.add(area.id);
        let fireMesh = fireAreaMeshesRef.current.get(area.id);
        if (!fireMesh) {
            const geometry = new THREE.CylinderGeometry(area.radius, area.radius * 0.9, CELL_SIZE * 0.05, 16, 1, true);
            const material = new THREE.MeshBasicMaterial({ color: 0x331100, transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false }); 
            fireMesh = new THREE.Mesh(geometry, material);
            fireMesh.position.set(area.position.x, area.position.y + (CELL_SIZE * 0.025), area.position.z);
            scene.add(fireMesh);
            fireAreaMeshesRef.current.set(area.id, fireMesh);
        }
        const ageRatio = (performance.now() - area.startTime) / area.durationMs;
        const material = fireMesh.material as THREE.MeshBasicMaterial;
        material.opacity = Math.max(0, 0.3 * (1 - ageRatio)); 
    });
    fireAreaMeshesRef.current.forEach((mesh, id) => {
        if (!currentAreaIds.has(id)) {
            scene.remove(mesh); mesh.geometry.dispose(); if (mesh.material instanceof THREE.Material) mesh.material.dispose();
            fireAreaMeshesRef.current.delete(id);
        }
    });
  }, [activeFireAreas]);

  useEffect(() => {
    if (!sceneRef.current || !cameraRef.current) return;
    const scene = sceneRef.current; const camera = cameraRef.current;
    const allUnits = [...playerUnits, ...enemyUnits];
    const activeUnitIdsWithVisibleBars = new Set<string>();
    allUnits.forEach(unit => {
        const unitSpec = UNIT_SPECS[unit.type]; const maxHealth = unitSpec.health;
        const healthPercentage = Math.max(0, unit.health / maxHealth);
        const showBar = unit.health > 0 && unit.health < (maxHealth * HEALTH_BAR_VISIBILITY_THRESHOLD);
        const barWidth = HEALTH_BAR_BASE_WIDTH * (unitSpec.visualScale || 1); 
        const barHeight = HEALTH_BAR_HEIGHT;
        if (showBar) {
            activeUnitIdsWithVisibleBars.add(unit.id);
            let healthBarGroup = healthBarMeshesRef.current.get(unit.id);
            if (!healthBarGroup) {
                if (inactiveHealthBarMeshPoolRef.current.length > 0) {
                    healthBarGroup = inactiveHealthBarMeshPoolRef.current.pop()!;
                    const bgMesh = healthBarGroup.children[0] as THREE.Mesh;
                    if (bgMesh) {
                        const originalBgGeomWidth = (bgMesh.geometry as THREE.PlaneGeometry).parameters.width;
                        bgMesh.scale.x = barWidth / originalBgGeomWidth;
                        const fgMesh = healthBarGroup.getObjectByName('foregroundHealth') as THREE.Mesh;
                        if (fgMesh) {
                           const originalFgGeomWidth = (fgMesh.geometry as THREE.PlaneGeometry).parameters.width;
                           fgMesh.scale.x = barWidth / originalFgGeomWidth; 
                        }
                    }
                } else {
                    healthBarGroup = new THREE.Group();
                    const bgGeo = new THREE.PlaneGeometry(barWidth, barHeight); 
                    const bgMat = new THREE.MeshBasicMaterial({ color: HEALTH_BAR_BACKGROUND_COLOR, side: THREE.DoubleSide });
                    const bgMesh = new THREE.Mesh(bgGeo, bgMat); healthBarGroup.add(bgMesh);
                    const fgGeo = new THREE.PlaneGeometry(barWidth, barHeight); 
                    const fgMat = new THREE.MeshBasicMaterial({ color: HEALTH_BAR_FOREGROUND_COLOR, side: THREE.DoubleSide });
                    const fgMesh = new THREE.Mesh(fgGeo, fgMat); fgMesh.name = 'foregroundHealth'; fgMesh.position.z = 0.001; 
                    healthBarGroup.add(fgMesh);
                }
                scene.add(healthBarGroup); healthBarMeshesRef.current.set(unit.id, healthBarGroup);
            }
            const modelTopOffset = getUnitModelApproxTopOffset(unit.type, unitSpec.visualScale || 1.0);
            healthBarGroup.position.x = unit.position.x;
            healthBarGroup.position.y = unit.position.y + modelTopOffset + HEALTH_BAR_Y_OFFSET_ABOVE_MODEL;
            healthBarGroup.position.z = unit.position.z;
            const fgMesh = healthBarGroup.getObjectByName('foregroundHealth') as THREE.Mesh;
            if (fgMesh) {
                fgMesh.scale.x = healthPercentage; 
                fgMesh.position.x = - (barWidth * (1 - healthPercentage)) / 2;
            }
            healthBarGroup.quaternion.copy(camera.quaternion); healthBarGroup.visible = true;
        }
    });
    healthBarMeshesRef.current.forEach((healthBarGroup, id) => {
        if (!activeUnitIdsWithVisibleBars.has(id)) {
            healthBarGroup.visible = false; 
            inactiveHealthBarMeshPoolRef.current.push(healthBarGroup);
            healthBarMeshesRef.current.delete(id);
        }
    });
  }, [playerUnits, enemyUnits, cameraRef, sceneRef]); 

  return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" style={{ touchAction: 'none' }} />;
};