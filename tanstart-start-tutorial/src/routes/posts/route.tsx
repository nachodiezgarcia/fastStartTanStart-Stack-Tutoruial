import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <p>Information of posts that is always there</p>
      <Outlet />
    </div>
  )
}
