/* eslint-disable perfectionist/sort-imports */
/* eslint-disable import/no-extraneous-dependencies */
import { Helmet } from 'react-helmet-async';
import { UserView } from '../sections/shop/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <UserView />
    </>
  );
}
