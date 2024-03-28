 
import { usePathname } from 'next/navigation'


export default function useActive(path) {
  const pathname  = usePathname();
  return pathname  === path ? 'border-b' : '';
}
