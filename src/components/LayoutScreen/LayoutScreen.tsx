import React from 'react';
import {useTheme} from 'styled-components';
import {
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StyleSheet,
} from 'react-native';

import * as Component from './LayoutScreen.styles';

export type PaddingType = 'small' | 'default' | 'large' | 'zero';

export type ColorType = 'default' | 'secondary' | 'transparent';

interface LayoutScreenProps extends ScrollViewProps {
  children: React.ReactElement<any>;
  footer?: React.ReactElement<any>;
  barColor?: ColorType;
  background?: ColorType;
  barTranslucent?: boolean;
  isPadding: PaddingType;
  isScroll?: boolean;
  barStyle?: 'dark-content' | 'default' | 'light-content';
}

type ChildrenComponentProps = {} & Pick<
  LayoutScreenProps,
  'children' | 'footer'
>;

export function LayoutScreen({
  children,
  footer,
  barTranslucent = false,
  isScroll = false,
  isPadding = 'default',
  background = 'default',
  barStyle = 'dark-content',
  ...rest
}: LayoutScreenProps) {
  const {colors} = useTheme();
  const stylesBackground =
    background === 'transparent' ? background : colors.statusBar.default;

  function ChildrenComponent(params: ChildrenComponentProps) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Component.Container
          isPadding={isPadding}
          style={{backgroundColor: stylesBackground}}>
          <>
            {params.children}
            {params.footer}
          </>
        </Component.Container>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <>
      <StatusBar
        translucent={barTranslucent}
        barStyle={barStyle}
        backgroundColor={colors.statusBar.default}
      />
      {isScroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          style={{
            backgroundColor: stylesBackground,
          }}
          {...rest}>
          <ChildrenComponent footer={footer}>{children}</ChildrenComponent>
        </ScrollView>
      ) : (
        <ChildrenComponent footer={footer}>{children}</ChildrenComponent>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {flexGrow: 1},
});
