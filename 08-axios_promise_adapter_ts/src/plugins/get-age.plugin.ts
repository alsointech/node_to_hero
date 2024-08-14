// import getAgePlugin from 'get-age';

// if dependency is updated, in the future, we just need to update the adapter
export const getAgePlugin = (birthday: string) => {

  return new Date().getFullYear() - new Date(birthday).getFullYear();
}
                            