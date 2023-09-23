import useFetchStaff from '@/hooks/useFetchStaff';

function Index() {
  const { fakeStaff, isLoading, isError, error } = useFetchStaff();
  return <div>{fakeStaff}</div>;
}

export default Index;
