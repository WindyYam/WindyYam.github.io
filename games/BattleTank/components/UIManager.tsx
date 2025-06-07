
import React from 'react';
import { TowerType, GamePhase, UnitType } from '../types.ts';
import { TOWER_SPECS, UNIT_SPECS, CELL_SIZE } from '../constants.ts';

interface UIManagerProps {
  money: number;
  playerBaseHealth: number;
  enemyBaseHealth: number;
  selectedTowerType: TowerType | null;
  onSelectTowerType: (type: TowerType | null) => void;
  onStartCombat: () => void;
  onBuildUnit: (type: UnitType) => void;
  gamePhase: GamePhase;
}

const TowerButton: React.FC<{
    type: TowerType;
    spec: typeof TOWER_SPECS[TowerType];
    isSelected: boolean;
    onClick: () => void;
    disabled: boolean;
    money: number;
}> = ({ type, spec, isSelected, onClick, disabled, money }) => {
  const canAfford = money >= spec.cost;
  const buttonDisabled = disabled || !canAfford;
  return (
    <button
      onClick={onClick}
      disabled={buttonDisabled}
      className={`p-1 sm:p-1.5 md:p-2 border-2 rounded-lg transition-all duration-150 h-full
        ${isSelected ? 'border-yellow-400 bg-yellow-600 scale-105 shadow-lg' : 'border-gray-600 hover:border-gray-400'}
        ${buttonDisabled && !isSelected ? 'bg-gray-700 opacity-50 cursor-not-allowed' : canAfford ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-800 opacity-70 cursor-not-allowed'}
        flex flex-col items-center justify-between w-[4.8rem] sm:w-24 md:w-28 text-[0.65rem] leading-[0.85rem] sm:text-xs sm:leading-tight flex-shrink-0`}
    >
      <span className="font-semibold truncate w-full px-0.5">{type.replace('_', ' ')}</span>
      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full my-0.5 sm:my-1" style={{ backgroundColor: `#${spec.color.toString(16).padStart(6, '0')}` }}></div>
      <span>Cost: {spec.cost}</span>
      <span>Dmg: {spec.damage}</span>
      <span>Rng: {spec.range / CELL_SIZE}</span>
    </button>
  );
};

const UnitButton: React.FC<{
    type: UnitType;
    spec: typeof UNIT_SPECS[UnitType];
    onClick: () => void;
    disabled: boolean;
    money: number;
}> = ({ type, spec, onClick, disabled, money}) => {
    const canAfford = money >= spec.cost;
    const buttonDisabled = disabled || !canAfford;
    const playerUnitColor = "3d8bff";

    return (
        <button
            onClick={onClick}
            disabled={buttonDisabled}
            className={`p-1 sm:p-1.5 md:p-2 border-2 rounded-lg transition-all duration-150 h-full border-blue-600 hover:border-blue-400
                ${buttonDisabled ? 'bg-gray-700 opacity-50 cursor-not-allowed' : canAfford ? 'bg-blue-700 hover:bg-blue-600' : 'bg-red-800 opacity-70 cursor-not-allowed'}
                flex flex-col items-center justify-between w-[4.8rem] sm:w-24 md:w-28 text-[0.65rem] leading-[0.85rem] sm:text-xs sm:leading-tight flex-shrink-0`}
        >
            <span className="font-semibold truncate w-full px-0.5">{type.replace('_', ' ')}</span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-sm my-0.5 sm:my-1" style={{ backgroundColor: `#${playerUnitColor}`}}></div>
            <span>Cost: {spec.cost}</span>
            <span>HP: {spec.health}</span>
            <span>Dmg: {spec.projectileDamage}</span>
        </button>
    );
};

export const UIManager: React.FC<UIManagerProps> = ({
  money, playerBaseHealth, enemyBaseHealth,
  selectedTowerType, onSelectTowerType, onStartCombat, onBuildUnit, gamePhase,
}) => {
  const towerTypes = Object.keys(TOWER_SPECS) as TowerType[];
  const unitTypes = (Object.keys(UNIT_SPECS) as UnitType[]).filter(type => type !== UnitType.SUPER_TANK);
  const startCombatButtonDisabled = gamePhase === 'ACTIVE_COMBAT' || gamePhase === 'GAME_OVER' || gamePhase === 'VICTORY';
  const controlsDisabled = gamePhase === 'GAME_OVER' || gamePhase === 'VICTORY';

  return (
    <div className="p-1 sm:p-2 md:p-2 bg-gray-900 text-white shadow-md flex flex-col md:flex-row md:justify-between md:items-start gap-1 sm:gap-1.5 md:gap-2">
      {/* Left: Game Stats */}
      <div className="w-full md:w-auto flex flex-row flex-wrap justify-center items-baseline md:flex-col md:items-start md:justify-start gap-x-2 sm:gap-x-3 gap-y-0.5 mb-1 md:mb-0 md:space-y-0.5 flex-shrink-0">
        <p className="text-xs sm:text-sm md:text-base font-semibold">Money: <span className="text-yellow-400">${Math.round(money)}</span></p>
        <p className="text-xs sm:text-sm md:text-base font-semibold">Your Base: <span className="text-green-500">{Math.round(playerBaseHealth)} HP</span></p>
        <p className="text-xs sm:text-sm md:text-base font-semibold">Enemy Base: <span className="text-red-500">{Math.round(enemyBaseHealth)} HP</span></p>
      </div>

      {/* Center: Build Controls (Scrollable Slider) */}
      {!controlsDisabled && (
        <div className="w-full overflow-x-auto py-1 sm:py-1.5 md:py-1.5 build-controls-scrollbar md:flex-1 md:min-w-0">
          <div className="flex space-x-1.5 sm:space-x-2 items-stretch px-1 min-w-max">
            {towerTypes.map(type => (
              <TowerButton
                key={type} type={type} spec={TOWER_SPECS[type]}
                isSelected={selectedTowerType === type}
                onClick={() => onSelectTowerType(selectedTowerType === type ? null : type)}
                disabled={controlsDisabled}
                money={money}
              />
            ))}
            {unitTypes.map(type => (
              <UnitButton
                key={type} type={type} spec={UNIT_SPECS[type]}
                onClick={() => onBuildUnit(type)}
                disabled={controlsDisabled}
                money={money}
              />
            ))}
          </div>
        </div>
      )}

      {/* Right: Game Phase / Action Button */}
      <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0 mt-1 md:mt-0">
        {gamePhase === 'ACTIVE_COMBAT' && !controlsDisabled && (
           <p className="text-xs sm:text-sm md:text-base font-semibold text-yellow-500 self-center md:self-end">Combat in Progress!</p>
        )}
        {(gamePhase === 'GAME_OVER' || gamePhase === 'VICTORY') && (
           <p className={`text-base sm:text-lg md:text-xl font-bold self-center md:self-end ${gamePhase === 'VICTORY' ? 'text-green-400' : 'text-red-400'}`}>
              {gamePhase === 'VICTORY' ? 'VICTORY!' : 'GAME OVER'}
           </p>
        )}
        {gamePhase === 'PLACEMENT' && !controlsDisabled && (
            <button
              onClick={onStartCombat}
              disabled={startCombatButtonDisabled}
              className={`w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors
                ${startCombatButtonDisabled
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
            >
              Start Combat
            </button>
        )}
      </div>
    </div>
  );
};