export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const DisplayImage = styled(Img)`
  && {
    width: 300px;
    height: 400px;
  }
`;
export const DisplayImageC = styled(Img)`
  && {
    width: 300px;
    height: 195px;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
