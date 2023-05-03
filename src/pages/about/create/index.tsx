import React from 'react'
import { useSession } from 'next-auth/react';
import { Status, Layout, AccessDenied, AboutForm } from '@/components';

const CreateAboutInfo = () => {
  const { data: session, status } = useSession()

  const handleFormSubmit = (data: any) => {
    console.log(data)
  }

  if (status === 'loading') {
    return <Status message="Authenticating..." />;
  }

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }
  return (
    <Layout>
      <>
        <h2 style={{ textAlign: 'center' }}>Create About Info</h2>
        <AboutForm handleFormSubmit={handleFormSubmit} />
      </>
    </Layout>
  )
}

export default CreateAboutInfo