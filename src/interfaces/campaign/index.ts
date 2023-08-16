import { LeadInterface } from 'interfaces/lead';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CampaignInterface {
  id?: string;
  name: string;
  start_date: any;
  end_date: any;
  status: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  lead?: LeadInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    lead?: number;
  };
}

export interface CampaignGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  user_id?: string;
  organization_id?: string;
}
