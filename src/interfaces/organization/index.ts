import { CampaignInterface } from 'interfaces/campaign';
import { CustomerInterface } from 'interfaces/customer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  campaign?: CampaignInterface[];
  customer?: CustomerInterface[];
  user?: UserInterface;
  _count?: {
    campaign?: number;
    customer?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
