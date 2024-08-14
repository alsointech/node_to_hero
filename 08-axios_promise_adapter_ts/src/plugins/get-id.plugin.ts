import { v4 as uudiv4 } from 'uuid';

// if dependency is updated, in the future, we just need to update the adapter
export const getUUID = () => {

  return uudiv4();
}
