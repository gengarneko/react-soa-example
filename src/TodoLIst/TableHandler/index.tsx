import { Space } from "antd";
import React, { Profiler, PropsWithoutRef, useEffect } from "react";
import useTableHandlerService, {
  TableHandlerService,
} from "./useTableHandlerService";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function TableHandler(
  props: PropsWithoutRef<{ title: string }>
) {
  const tableHandlerService = useTableHandlerService();
  useEffect(() => {
    tableHandlerService.setTitle(props.title);
  }, [props, tableHandlerService]);
  return (
    <Profiler id='render' onRender={console.log}>
      <TableHandlerService.Provider value={tableHandlerService}>
        <Space>
          <DeleteButton />
          <EditButton />
        </Space>
      </TableHandlerService.Provider>
    </Profiler>
  );
}
