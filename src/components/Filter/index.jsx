import { ContainerFilterStyled, InputFilterStyled } from './filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <ContainerFilterStyled>
      <label>Find contacts my name</label>
      <InputFilterStyled
        name="filter"
        type="text"
        value={filter}
        onChange={onChange}
      />
    </ContainerFilterStyled>
  );
};

export default Filter;
