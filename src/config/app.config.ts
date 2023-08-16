interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Marketing Manager', 'Sales Representative', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'Xplus',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
