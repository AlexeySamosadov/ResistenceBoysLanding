import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import russiaFlag from '../images/flags/russia.svg'
import ingFlag from '../images/flags/eng.png'
import chinaFlag from '../images/flags/cn.png'
import spainFlag from '../images/flags/esp.png'
import italiaFlag from '../images/flags/it.png'
import indiaFlag from '../images/flags/ind.png'
import koreaFlag from '../images/flags/kor.png'
import turkFlag from '../images/flags/tur.png'






import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const options = [
  {languge: 'Русский', srcImage : russiaFlag},
  {languge: 'Английский', srcImage : ingFlag},
  {languge: 'Китайский', srcImage : chinaFlag},
  {languge: 'Испанский', srcImage : spainFlag},
  {languge: 'Итальянский', srcImage : italiaFlag},
  {languge: 'Индийский', srcImage : indiaFlag},
  {languge: 'Индонезийский', srcImage : indiaFlag},
  {languge: 'Корейский', srcImage : koreaFlag},
  {languge: 'Турецкий', srcImage : turkFlag},
];

const ITEM_HEIGHT = 70;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src={russiaFlag} width="25" height="25" alt="Русский флаг"></img>
         <SvgIcon>
          {!open ? (
          <path d="M12 15L12.3536 15.3536L12 15.7071L11.6464 15.3536L12 15ZM18.3536 9.35355L12.3536 15.3536L11.6464 14.6464L17.6464 8.64645L18.3536 9.35355ZM11.6464 15.3536L5.64645 9.35355L6.35355 8.64645L12.3536 14.6464L11.6464 15.3536Z" fill="white"/>           
          ) : (<span>fff</span>)}
        </SvgIcon>

      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            marginTop: '15px'
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>

            <img src={option?.srcImage} width="25" height="25" alt='' />
            &nbsp;
            {option?.languge}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}