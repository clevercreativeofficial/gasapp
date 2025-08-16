// components/icons/index.tsx
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  SearchIcon,
  Home01Icon,
  UserIcon,
  SettingsIcon,
  ArrowLeft02Icon,
  Store01Icon
  // Add more icons as needed
} from '@hugeicons/core-free-icons';

// Search Icon
export const Search = ({ size = 24, className = '', ...props }) => (
  <HugeiconsIcon 
    icon={SearchIcon} 
    width={size} 
    height={size} 
    className={className} 
    {...props} 
  />
);

// Home Icon
export const Home = ({ size = 24, className = '', ...props }) => (
  <HugeiconsIcon 
    icon={Home01Icon} 
    width={size} 
    height={size} 
    className={className} 
    {...props} 
  />
);

// User Icon
export const User = ({ size = 24, className = '', ...props }) => (
  <HugeiconsIcon 
    icon={UserIcon} 
    width={size} 
    height={size} 
    className={className} 
    {...props} 
  />
);

// Settings Icon
export const Settings = ({ size = 24, className = '', ...props }) => (
  <HugeiconsIcon 
    icon={SettingsIcon} 
    width={size} 
    height={size} 
    className={className} 
    {...props} 
  />
);

// ArrowLeft Icon
export const ArrowLeft = ({ size = 24, className = '', ...props }) => (
  <HugeiconsIcon 
    icon={ArrowLeft02Icon} 
    width={size} 
    height={size} 
    className={className} 
    {...props} 
  />
);

// Store Icon
export const Store = ({ size = 24, className = '', ...props }) => (
  <HugeiconsIcon 
    icon={Store01Icon} 
    width={size} 
    height={size} 
    className={className} 
    {...props} 
  />
);



// Add more icons following the same pattern...