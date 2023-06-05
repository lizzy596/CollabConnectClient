interface Route {
  path: string
  exact: boolean
  layout: React.FC<any>
  roles: string[]
  element: React.FC
}

export default Route