export interface Project {
  projectCode: string;
  name: string;
  location: string;
  client: string;
  timeline: {
    start: string;
    end: string;
  };
  budget: string;
  status: 'active' | 'completed' | 'on-hold';
}
export interface DocumentItem {
  name: string;
  type: string;
  category: string;
  version: string;
  uploadedBy: string;
  date: string;
  size: string;
}

export interface CategoryCard {
  title: string;
  count: number;
}