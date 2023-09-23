import useFetchStaff from '@/hooks/useFetchStaff';

function Index() {
  const { fakeStaff, isLoading, isError, error } = useFetchStaff();
  return <div>index</div>;
}

export default Index;
