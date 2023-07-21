import { FaSun, FaMoon } from 'react-icons/fa'
import { Switch } from '@nextui-org/react'
import Image from 'next/image'

import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react'

export default function Navbar() {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()

  return (
    <nav className="flex w-full items-center justify-between">
      <a href="https://mariomolina-cloud.vercel.app/">
        <Image src="/assets/logo.svg" width="150" height="30" alt="Logo" />
      </a>
      <div>
        <Switch
          checked={isDark}
          size="md"
          iconOn={<FaMoon />}
          iconOff={<FaSun />}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
      </div>
    </nav>
  )
}