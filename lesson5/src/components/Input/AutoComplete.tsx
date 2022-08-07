import { UserOutlined } from '@ant-design/icons';
import { AutoComplete as AutoCompleteAnt, Input } from 'antd';
import React, { useEffect, useState } from 'react';

import s from "../Input/AutoComplete.module.css";
import { SearchOutlined } from "@ant-design/icons";
import { listCate } from '../../api/category';
import { ProductType } from '../../types/product';
  
  
  const AutoComplete: React.FC = () => {
    const [dataTable, setDataTable] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await listCate();
      setDataTable(data);
    };
    fetchData();
  }, []);
  const options = dataTable.map((item) => {
    return {
      value: item.name,
    };
  });
  return (
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
  }

export default AutoComplete