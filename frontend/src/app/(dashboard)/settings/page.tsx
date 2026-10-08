
import {
  ProfileHeader,
  Profile,
  Theme,
  Security,
  Notifications
} from "@/features/account/components"

export default function Account() {
  
  return (
    <div className="space-y-6">
      <ProfileHeader />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 space-y-6">
        <Profile />
        <Theme />
        <Security />
        <Notifications />
      </div>
    </div>
  )
}
