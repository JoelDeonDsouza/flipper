/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import {Button, Dropdown, Menu, Radio, Input} from 'antd';
import {LeftSidebar, SidebarTitle, InfoIcon} from './LeftSidebar';
import {
  AppleOutlined,
  AndroidOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {Layout, Link} from '../ui';
import {theme} from './theme';

const appTooltip = (
  <>
    Inspect apps by selecting connected devices and emulators. Navigate and
    bookmark frequent destinations in the app. Refresh, screenshot and
    screenrecord is also available.{' '}
    <Link href="https://fbflipper.com/docs/getting-started/index">
      Learn More
    </Link>
  </>
);

export function AppInspect() {
  return (
    <LeftSidebar>
      <Layout.Top scrollable>
        <Layout.Container borderBottom>
          <SidebarTitle actions={<InfoIcon>{appTooltip}</InfoIcon>}>
            App Inspect
          </SidebarTitle>
          <Layout.Vertical padv="small" padh="medium" gap={theme.space.large}>
            <DeviceDropdown />
            <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
            <Layout.Horizontal gap>
              <Button icon={<SettingOutlined />} type="link" />
              <Button icon={<SettingOutlined />} type="link" />
              <Button icon={<SettingOutlined />} type="link" />
            </Layout.Horizontal>
          </Layout.Vertical>
        </Layout.Container>
        <Layout.Container>Dynamic section</Layout.Container>
      </Layout.Top>
    </LeftSidebar>
  );
}

function DeviceDropdown() {
  return (
    <Radio.Group value={1} size="small">
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item icon={<AppleOutlined />} style={{fontWeight: 'bold'}}>
              IPhone 11
            </Menu.Item>
            <Menu.Item>
              <Radio value={1}>Facebook</Radio>
            </Menu.Item>
            <Menu.Item>
              <Radio value={3}>Instagram</Radio>
            </Menu.Item>
            <Menu.Item icon={<AndroidOutlined />} style={{fontWeight: 'bold'}}>
              Android
            </Menu.Item>
          </Menu>
        }>
        <Button icon={<AppleOutlined />} style={{width: '100%'}}>
          Facebook Iphone11
        </Button>
      </Dropdown>
    </Radio.Group>
  );
}
