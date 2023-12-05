import { useNavigate } from 'react-router-dom'
import { User } from '@/types/types.ts'
import { logout } from '@/requests/auth.ts'
import { useResetRecoilState } from 'recoil'
import { userState } from '@/recoil/atom.ts'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User as NextUser,
} from '@nextui-org/react'

export function UserNav(user: Readonly<User>) {
  const navigate = useNavigate()
  const resetUser = useResetRecoilState(userState)

  async function handleLogout() {
    resetUser()
    localStorage.removeItem('user')
    await logout()
    navigate('/login')
  }

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <NextUser
            as="button"
            avatarProps={{
              size: 'sm',
              isBordered: true,
              src: 'https://ui.shadcn.com/avatars/02.png',
            }}
            className="transition-transform"
            description="@tonyreichert"
            name="Tony Reichert"
            classNames={{
              name: 'text-xs',
              description: 'text-xs text-muted-foreground',
            }}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
