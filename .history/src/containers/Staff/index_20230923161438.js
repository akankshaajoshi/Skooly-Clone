import useFetchStaff from '@/hooks/useFetchStaff';

function Index() {
  const { fakeStaff, isLoading, isError, error } = useFetchStaff();
  console.log(fakeStaff);
  return <div>index</div>;
}

export default Index;
