import {
  LayoutDashboard,
  Users,
  Boxes,
  EqualSquareIcon,
  HandCoins,
  SquareStack,
  Landmark,
  NotebookText,
  PiggyBank,
  Files,
  ReceiptText,
  BanknoteArrowDown,
  BookMarkedIcon,
  PresentationIcon,
  ShieldUser,
  ShoppingCart,
  Box,
  Settings,
  CalendarDays,
  Wallet,
  DockIcon,
  TicketCheck,
  Settings2Icon,
  User,
} from "lucide-react";
import { FcManager, FcSalesPerformance } from "react-icons/fc";
import { GrOrderedList, GrUserAdmin } from "react-icons/gr";
import { MdInventory, MdPayment, MdPayments } from "react-icons/md";
import { PiInvoice, PiTrayArrowUpFill } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiAdminer, SiStaffbase } from "react-icons/si";
import { WiRefresh } from "react-icons/wi";
export const sideConfig = {
  admin: {
    general: [
      { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { name: "Parties", path: "/parties", icon: Users },
      { name: "Leads", path: "/leads", icon: Users },
      {
        name: "Items",
        path: "/items",
        icon: Boxes,
        children: [
          { name: "inventry", path: "/items/inventry", icon: MdInventory },
          { name: "godown", path: "/items/godown", icon: WiRefresh },
        ],
      },
      {
        name: "Sales",
        icon: Box,
        children: [
          {
            name: "Sales invoice",
            path: "/sales",
            icon: PiInvoice,
          },
          // {
          //   name: "Quotation/Estimate",
          //   path: "/sales/quotation",
          //   icon: EqualSquareIcon,
          // },
          { name: "Payment in", path: "/sales/payment", icon: HandCoins },
          {
            name: "Sales-Return",
            path: "/sales/salesreturn",
            icon: FcSalesPerformance,
          },
        ],
      },

      {
        name: "Purchases",
        path: "/purchases",
        icon: Landmark,
        children: [
          {
            name: "Purchase Invoice",
            path: "/purchases/purchaseinvoice",
            icon: TicketCheck,
          },
          {
            name: "Payment out",
            path: "/purchases/PaymentOut",
            icon: MdPayment,
          },
          {
            name: "Purchase Return",
            path: "/purchases/PurchaseReturn",
            icon: RiSecurePaymentFill,
          },
          {
            name: "Purchase Order",
            path: "/purchases/PurchaseOrder",
            icon: GrOrderedList,
          },
        ],
      },
      { name: "Reports", path: "/reports", icon: NotebookText },
      {
        name: "Quotation/Estimate",
        path: "/quotation",
        icon: EqualSquareIcon,
      },
    ],
    accounting: [
      // Account and billing
      { name: "Cash and Bank", path: "/cash", icon: PiggyBank },
      { name: "E-Invoicing", path: "/invoicing", icon: Files },
      // { name: "Automated-Bills", path: "/bills", icon: ReceiptText },
      { name: "Expenses", path: "/expenses", icon: BanknoteArrowDown },
      // { name: "POS Billing", path: "/pos", icon: BookMarkedIcon },
    ],

    // Business Tools
    businessTools: [
      {
        name: "Attendance & Payroll ",
        path: "/staffattendance",
        icon: SiStaffbase,
        children: [
          {
            name: "Attendance",
            path: "/staffattendance/attendance",
            icon: CalendarDays,
          },
          {
            name: "Payroll",
            path: "/staffattendance/payroll",
            icon: MdPayments,
          },
        ],
      },
      { name: "Manage Users", path: "/users", icon: GrUserAdmin },
      { name: "HR Portal", path: "/Hrportal", icon: FcManager },
      { name: "Online Orders", path: "/online", icon: ShoppingCart },
      // { name: "Settings", path: "/settings", icon: Settings },
    ],
  },

  subadmin: {
    general: [
      { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { name: "Parties", path: "/parties", icon: Users },
      {
        name: "Items",
        path: "/items",
        icon: Boxes,
        children: [
          { name: "inventry", path: "/items/inventry", icon: MdInventory },
          { name: "godown", path: "/items/godown", icon: WiRefresh },
        ],
      },
      {
        name: "Sales",

        icon: Box,
        children: [
          {
            name: "Sales invoice",
            path: "/sales",
            icon: PiInvoice,
          },
          {
            name: "Quotation/Estimate",
            path: "/quotation",
            icon: EqualSquareIcon,
          },
          { name: "Payment in", path: "/payment", icon: HandCoins },
          {
            name: "Sales-Return",
            path: "/salesreturn",
            icon: FcSalesPerformance,
          },
        ],
      },

      {
        name: "Purchases",
        path: "/purchases",
        icon: Landmark,
        children: [
          {
            name: "Purchase Invoice",
            path: "/purchases/purchaseinvoice",
            icon: TicketCheck,
          },
          {
            name: "Payment out",
            path: "/purchases/PaymentOut",
            icon: MdPayment,
          },
          {
            name: "Purchase Return",
            path: "/purchases/PurchaseReturn",
            icon: RiSecurePaymentFill,
          },
          {
            name: "Purchase Order",
            path: "/purchases/PurchaseOrder",
            icon: GrOrderedList,
          },
        ],
      },
      { name: "Reports", path: "/reports", icon: NotebookText },
    ],
    accounting: [
      // Account and billing
      { name: "Cash and Bank", path: "/cash", icon: PiggyBank },
      { name: "E-Invoicing", path: "/invoicing", icon: Files },
      { name: "Automated-Bills", path: "/bills", icon: ReceiptText },
      { name: "Expenses", path: "/expenses", icon: BanknoteArrowDown },
      { name: "POS Billing", path: "/pos", icon: BookMarkedIcon },
    ],

    // Business Tools
    businessTools: [
      {
        name: "Attendance & Payroll ",
        path: "/staffattendance",
        icon: SiStaffbase,
        children: [
          {
            name: "Attendance",
            path: "/staffattendance/attendance",
            icon: CalendarDays,
          },
          {
            name: "Payroll",
            path: "/staffattendance/payroll",
            icon: MdPayments,
          },
        ],
      },
      { name: "Manage Users", path: "/users", icon: GrUserAdmin },
      { name: "HR Portal", path: "/Hrportal", icon: FcManager },
      { name: "Online Orders", path: "/online", icon: ShoppingCart },
      { name: "Settings", path: "/settings", icon: Settings },
    ],
  },

  employee: {
    general: [
      { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { name: "Parties", path: "/parties", icon: Users },
      {
        name: "Items",
        path: "/items",
        icon: Boxes,
        children: [
          { name: "inventry", path: "/items/inventry", icon: MdInventory },
          { name: "godown", path: "/items/godown", icon: WiRefresh },
        ],
      },
      {
        name: "Sales",

        icon: Box,
        children: [
          {
            name: "Sales invoice",
            path: "/sales",
            icon: PiInvoice,
          },
          {
            name: "Quotation/Estimate",
            path: "/quotation",
            icon: EqualSquareIcon,
          },
          { name: "Payment in", path: "/payment", icon: HandCoins },
          {
            name: "Sales-Return",
            path: "/salesreturn",
            icon: FcSalesPerformance,
          },
        ],
      },

      {
        name: "Purchases",
        path: "/purchases",
        icon: Landmark,
        children: [
          {
            name: "Purchase Invoice",
            path: "/purchases/purchaseinvoice",
            icon: TicketCheck,
          },
          {
            name: "Payment out",
            path: "/purchases/PaymentOut",
            icon: MdPayment,
          },
          {
            name: "Purchase Return",
            path: "/purchases/PurchaseReturn",
            icon: RiSecurePaymentFill,
          },
          {
            name: "Purchase Order",
            path: "/purchases/PurchaseOrder",
            icon: GrOrderedList,
          },
        ],
      },
      { name: "Reports", path: "/reports", icon: NotebookText },
    ],
    accounting: [
      // Account and billing
      { name: "Cash and Bank", path: "/cash", icon: PiggyBank },
      { name: "E-Invoicing", path: "/invoicing", icon: Files },
      { name: "Automated-Bills", path: "/bills", icon: ReceiptText },
      { name: "Expenses", path: "/expenses", icon: BanknoteArrowDown },
      { name: "POS Billing", path: "/pos", icon: BookMarkedIcon },
    ],

    // Business Tools
    businessTools: [
      {
        name: "Attendance & Payroll ",
        path: "/staffattendance",
        icon: SiStaffbase,
        children: [
          {
            name: "Attendance",
            path: "/staffattendance/attendance",
            icon: CalendarDays,
          },
          {
            name: "Payroll",
            path: "/staffattendance/payroll",
            icon: MdPayments,
          },
        ],
      },
      { name: "Manage Users", path: "/users", icon: GrUserAdmin },
      { name: "HR Portal", path: "/subadmin/Hrportal", icon: FcManager },
      { name: "Online Orders", path: "/online", icon: ShoppingCart },
      { name: "Settings", path: "/settings", icon: Settings },
    ],
  },
  settingsitems:[
    {name: "Manage Business ", path: "/settings/business", icon: DockIcon},
    {name: "Invoice Settings" , path: "/settings/invoicesetting", icon: Settings2Icon},
    {name: "Manage Users ", path: "/settings/manage", icon: User},

  ]
};

