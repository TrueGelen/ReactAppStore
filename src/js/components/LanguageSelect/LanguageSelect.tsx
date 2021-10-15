import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { SelectInputProps } from "@material-ui/core/Select/SelectInput";
import { map } from "lodash";
import React, { memo } from "react";
import { FC } from "react";
import { useLocalization } from "../../utils/decorators/withLoc/useLocalization";
import { TLanguage } from "../../utils/Localization/Localization";
import _s from "./styles.module.scss";

export interface LanguageSelect {
  onChange: SelectInputProps<TLanguage>["onChange"];
}

const LanguageSelect: FC<LanguageSelect> = (props) => {
  const { onChange } = props;
  const localization = useLocalization();

  return (
    <FormControl fullWidth>
      <InputLabel id="language_select">{"Language"}</InputLabel>
      <Select
        labelId="language_select"
        value={localization.getLanguage()}
        label={"Language"}
        onChange={onChange}
      >
        {map(localization.getLanguageList(), (lang) => (
          <MenuItem value={lang}>{lang}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default memo(LanguageSelect);
