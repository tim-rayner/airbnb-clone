import {Button as PrimeButton} from 'primereact/button';

const buttonSizeStyles = [{
  'sm': `text-sm px-3 py-1.5`,
  'md': 'text-md px-4 py-2',
  'lg': 'text-lg px-6 py-3',
  'xl': 'text-xl px-8 py-4',
  'ico': 'text-sm px-3 py-1.5 w-1' 
}];

const buttonRadiusStyles = {
  'sm': 'rounded-sm',
  'md': 'rounded-md',
  'lg': 'rounded-lg',
  'xl': 'rounded-xl', 
  'full': 'rounded-full'  
};

const buttonStyleClasses = {
  'primary': 'bg-button-dark border-button-dark -outline--button-dark active:outline-button-dark  hover:-bg--linaria-theme_palette-product-rausch hover:-border--linaria-theme_palette-product-rausch focus:-shadow--linaria-theme_palette-rausch focus:shadow-none',
  'secondary': 'hover:!bg-shadow bg-transparent hover:bg-[#f0f0f0] hover:border-[#f0f0f0] active:bg-[#e0e0e0] active:border-[#e0e0e0] focus:shadow-none focus:border-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#f0f0f0] focus:ring-opacity-50 shadow-none text-black border-transparent',
  'outline': 'bg-transparent hover:!bg-shadow border-black text-black focus:shadow-none',
  'tinted': 'bg-smoke hover:-bg--linaria-theme_palette-black border-[#f0f0f0] -text---linaria-theme_palette-white focus:shadow-none', 
  'light': 'bg-white hover:bg-[#f0f0f0] border-black text-black focus:shadow-none',
};

/**
 * @todo: font weight should be controlled by one of the props 
 */

const Button = ({
  label = "",
  size = 'md',
  rounded = 'md',
  style = 'primary',
  icon= "",
  iconOnly = false,
}: {
  label: string,
  size?: 'sm' | 'md' | 'lg' | 'xl',
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full',
  style?: 'primary' | 'secondary' | 'outline' | 'tinted' | 'light',
  icon?: string,
  iconOnly?: boolean,
}) => {
  const sizeStyles = buttonSizeStyles[0][size];
  const radiusStyles = buttonRadiusStyles[rounded];
  const styleClasses = buttonStyleClasses[style];
  const iconClass = icon.length ? icon : ""; 
  const iconOnlyClass = iconOnly ? "w-1" : ""; // Determine icon only class based on iconOnly prop
  return (
    <PrimeButton 
      outlined={false} 
      label={label} 
      className={`${styleClasses} ${sizeStyles} ${radiusStyles} ${iconOnlyClass} !font-light`}
      icon={iconClass} // Set the icon prop
    />
  );
}

export default Button;