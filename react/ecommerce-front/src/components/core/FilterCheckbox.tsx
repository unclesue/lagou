import React, { FC, useEffect } from "react";
import { Typography, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/reducers";
import { CategoryState } from "../../store/reducers/category";
import { getCategory } from "../../store/actions/category";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

const { Title } = Typography;

interface Props {
  handleFilter: (arg: string[]) => void;
}

const FilterCheckbox: FC<Props> = ({ handleFilter }) => {
  const dispatch = useDispatch();
  const { category } = useSelector<AppState, CategoryState>(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const onChange = (checkedValue: CheckboxValueType[]) => {
    handleFilter(checkedValue as string[])
  };

  return (
    <>
      <Title level={4}>按照分类筛选</Title>
      <Checkbox.Group
        className="checkBoxFilter"
        options={category.result.map((item) => ({
          label: item.name,
          value: item._id,
        }))}
        onChange={onChange}
      />
    </>
  );
};

export default FilterCheckbox;
