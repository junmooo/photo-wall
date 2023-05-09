import { MenuProps } from "antd";

const MENU_ITEMS: MenuProps["items"] = [
  {
    label: "作品集",
    key: "mail",
  },
  {
    label: "关于",
    key: "app",
  },
  {
    label: "子菜单",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
];
export { MENU_ITEMS };
