import React from 'react'
import styled from 'styled-components'
import { ArrowBack, ExpandMore, Close } from '@material-ui/icons'
import theme from '../../theme'
import Location from '../../../__json__/location.json'

const StyledHeader = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  z-index: 999;
  position: fixed;
  background-color: ${theme.colors.white_2};
  height: 60px;
  z-index: ${theme.zIndex.header};
`

const WrapperIcon = styled.div`
  padding: 0rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
`

const StyledRow = styled.div`
  padding: 0.3rem 0.5rem;
  width: auto;
  height: auto;
  color: ${theme.colors.gray_dark};
`

const StyledTitleLocation = styled.div`
  width: auto;
  font-size: 9pt;
`
const StyledLocation = styled(StyledTitleLocation)`
  width: auto;
  font-size: 13pt;
`

const StyledFilter = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  z-index: ${theme.zIndex.styledFilter};
  height: 50vh;
  background: ${theme.colors.gray_alt};
  opacity: 0.8;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
`

const StyledModal = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  bottom: 0;
  left: 0;
  right: 0;
  height: 80vh;
  background: ${theme.colors.white_3};
  position: fixed;
  border-radius: 10px 10px 0px 0px;
  z-index: ${theme.zIndex.modal};
`

const WrapperIconClose = styled.div`
  width: auto;
  height: auto;
  float: right;
  margin: 5px;
`

const StyledModalTitle = styled.div`
  margin: 25px 10px 10px 10px;
  padding: 8px;
  font-size: 24px;
  color: ${theme.colors.gray_dark};
`

const WrapperInput = styled.div`
  position: relative;
  height: 50px;
  padding: 8px;
  margin: 10px;
  span {
    position: absolute:
    right: 0;
  }
`

const StyledInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'fill in your location here ...',
}))`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 1px solid ${theme.colors.gray_alt};
  border-radius: 4px;
  outline: none;
  color: ${theme.colors.gray_alt};
  font-size: 13pt;
`

const List = styled.div`
  margin: 0px 10px 10px 10px;
  padding: 8px;
  height: auto;
`

const ListItem = styled.div`
  width: auto;
  padding: 8px;
  color: ${theme.colors.gray_dark};
  > * {
    margin: 0 10px;
  }
  &:hover {
    background: ${theme.colors.gray_alt};
    border-radius: 5px;
    color: ${theme.colors.white_2};
    cursor: pointer;
  }
  small {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 20px;
  }
`

function Header({ onClick, show }) {
  const { data } = Location
  const [open, setOpen] = React.useState(false)
  const [chooseCity, setChooseCity] = React.useState()
  const [doSearch, setDoSearch] = React.useState(false)
  const [filteredCities, setFilteredCities] = React.useState([])

  const activeCity = chooseCity || data[0].name

  const listItemOnClick = val => {
    setChooseCity(val)
    setOpen(false)
    return val
  }

  const renderListItems = (cityData: CityProps[]): React.Node => {
    if (cityData.length > 0) {
      return cityData.map(item => {
        return (
          <ListItem
            key={item.id}
            onClick={() => listItemOnClick(item.name)}
            data-testid="cityListItem"
          >
            <p>{item.name}</p>
            <small>{item.address}</small>
          </ListItem>
        )
      })
    }
    return <p style={{ textAlign: 'center' }}>location not found</p>
  }

  const searchCity = val => {
    if (val.length >= 3) {
      setDoSearch(true)
      let filteredResult = []
      if (data && data.length) {
        filteredResult = data.filter(city =>
          city.name.toLowerCase().includes(val.toLowerCase()),
        )
      }
      return filteredResult
    }
    setDoSearch(false)
    return data
  }

  const handleValueChange = e =>
    setFilteredCities(searchCity(e.target.value) || [])

  return (
    <React.Fragment>
      <StyledFilter onClick={() => setOpen(false)} show={open} />
      <StyledHeader>
        <WrapperIcon>
          <ArrowBack style={{ color: `${theme.colors.gray_dark}` }} />
        </WrapperIcon>
        <StyledRow onClick={() => setOpen(true)}>
          <StyledTitleLocation>
            Alamat Pengantaran
          </StyledTitleLocation>
          <StyledLocation>
            {activeCity}
            <ExpandMore style={{ color: `${theme.colors.pink}` }} />
          </StyledLocation>
        </StyledRow>
      </StyledHeader>
      <StyledModal show={open}>
        <WrapperIconClose onClick={() => setOpen(false)}>
          <Close fontSize="small" />
        </WrapperIconClose>
        <StyledModalTitle>
          Cek makanan yang tersedia di lokasi kamu!
        </StyledModalTitle>
        <WrapperInput>
          <StyledInput
            onChange={handleValueChange}
            onFocus={handleValueChange}
          />
        </WrapperInput>
        <List>{doSearch && renderListItems(filteredCities)}</List>
      </StyledModal>
    </React.Fragment>
  )
}

Header.defaultProps = {
  onClick: null,
}

export default Header
