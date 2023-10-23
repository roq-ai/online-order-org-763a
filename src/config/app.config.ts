interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Supply Chain Manager'],
  tenantName: 'Grocer',
  applicationName: 'Online Order Organic Vegetables',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read product information', 'Create orders', 'Write reviews', 'Read grocer information'],
  ownerAbilities: [
    'Manage user information',
    'Manage grocer information',
    'Manage product information',
    'Manage order and order items',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/5c9dcb48-55d7-4691-b298-6e5360f77dd3',
};
