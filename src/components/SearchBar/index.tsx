import { SEARCHBAR_PLACE_HOLDER } from '../../constants';
import styled from 'styled-components';

const SearchInput = styled.input`
  border-radius: 8px;
  background-color: #eef1f4;
  line-height: 1.2;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.color.deepGray};
  padding: 10px 54px 11px 16px;
`;

export const SearchBar = () => {
  return (
    <form autoComplete="off">
      <SearchInput type="text" placeholder={SEARCHBAR_PLACE_HOLDER} />
    </form>
  );
};