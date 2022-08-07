import { UserOutlined } from '@ant-design/icons';
import { AutoComplete as AutoCompleteAnt, Input } from 'antd';
import React from 'react';

import s from "../Input/AutoComplete.module.css";
import { SearchOutlined } from "@ant-design/icons";
  
  const options = [
    { value: "Iphone" },
    { value: "Oppo" },
    { value: "Samsung" },
    { value: "Xiaomi" },
  ];
  
  const AutoComplete: React.FC = () => (
    <div className={s.content_btn}>
    <AutoCompleteAnt
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{ width: 500 } }
      options={options}

    /> 
    <SearchOutlined className={s.ic_seach}  />
    </div>
    
  );

export default AutoComplete