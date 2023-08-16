const mapping: Record<string, string> = {
  campaigns: 'campaign',
  customers: 'customer',
  leads: 'lead',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
