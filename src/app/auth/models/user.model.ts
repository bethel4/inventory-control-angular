export interface User {
  id?: number;
  email: string;
  name: string;
  roles: string[];
}

export const EMPTY_User = {
  id: null,
  email: '',
  name: '',
  roles: ''
};

