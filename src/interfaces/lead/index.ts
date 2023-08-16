import { UserInterface } from 'interfaces/user';
import { CampaignInterface } from 'interfaces/campaign';
import { GetQueryInterface } from 'interfaces';

export interface LeadInterface {
  id?: string;
  name: string;
  email: string;
  status: string;
  user_id?: string;
  campaign_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  campaign?: CampaignInterface;
  _count?: {};
}

export interface LeadGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  email?: string;
  status?: string;
  user_id?: string;
  campaign_id?: string;
}
