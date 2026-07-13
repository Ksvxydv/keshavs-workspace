import {
  IconDeviceAirpods,
  IconWifi,
  IconBattery3,
  IconAdjustmentsHorizontal,
} from "@tabler/icons-react";

import useSystem from "../../core/system/useSystem";

export default function MenuRight({
  children,
  onMusic,
  onWifi,
  onBattery,
  onControlCenter,
}) {
  const { wifi, battery } = useSystem();
  const iconProps = {
    size: 16,
    stroke: 1.65,
  };
  const Item = ({ children: icon, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-7 min-w-[28px] items-center justify-center rounded-md px-1.5 text-white/90 transition-all duration-150 hover:bg-white/10 hover:text-white"
    >
      {icon}
    </button>
  );

  return (
    <div className="flex items-center gap-1 text-[13px] font-medium">
      <Item onClick={onMusic}>
        <IconDeviceAirpods {...iconProps} />
      </Item>

      <Item onClick={onWifi}>
        <IconWifi
          {...iconProps}
          className={wifi ? "opacity-100" : "opacity-40"}
        />
      </Item>

      <Item onClick={onBattery}>
        <IconBattery3
          {...iconProps}
          className={battery <= 20 ? "text-red-400" : ""}
        />
        <span className="ml-1 text-[12px] font-medium leading-none">
          {battery}%
        </span>
      </Item>

      <div className="ml-1 rounded-md px-2 py-1 transition-colors duration-150 hover:bg-white/10">
        {children}
      </div>

      <Item onClick={onControlCenter}>
        <IconAdjustmentsHorizontal {...iconProps} />
      </Item>
    </div>
  );
}
