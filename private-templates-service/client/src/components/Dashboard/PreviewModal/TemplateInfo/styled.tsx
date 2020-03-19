import styled from 'styled-components';
import { COLORS } from '../../../../globalStyles';

import { Dropdown, ActionButton, Icon, IDropdownStyles } from "office-ui-fabric-react";
import { PostedTemplate } from 'adaptive-templating-service-typescript-node';

export const StyledVersionDropdown = styled(Dropdown)`
  display: flex
  padding-right: 10px;
`;

export const DropdownStyles: Partial<IDropdownStyles> = {
  dropdown: {
    fontSize: 22
  },
  title: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 0,
  },
}

export const OuterWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 16px 32px 16px 40px;
  border-bottom: 1px solid ${COLORS.BORDER2};
`;

export const TopRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

export const StatusIndicator = styled.div<{ state?: PostedTemplate.StateEnum }>`
  background-color: ${props =>
    props.state === PostedTemplate.StateEnum.Live ? COLORS.GREEN :
      props.state === PostedTemplate.StateEnum.Draft ? COLORS.YELLOW : COLORS.GREY3};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 4px 2px 8px;
`

export const Status = styled.div`
  font-size: 14px;
  font-weight: 400;
`
export const TimeStamp = styled.div`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  margin-left: 64px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledButton = styled(ActionButton) <{ isPink: boolean }>`
  ${props => props.isPink && `color: pink;`}
  &: focus {
    outline: none;
  }
`;

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 32px 32px 0 40px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-top: 20px;
  justify-content: space-between;
`;

export const Card = styled.div`
  flex: 0.47 0 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 6px #00000029;
  padding: 8px 0px 16px;
  margin-bottom: 24px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8px;
  font-size: 22px;
  font-weight: 600;
  border-bottom: 1px solid ${COLORS.BORDER};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  padding-top: 8px;
`;

export const IconWrapper = styled(Icon)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  font-size: 1.5rem;
  background-color: ${COLORS.GREY1};
  margin: 8px 0;
`;

export const UsageNumber = styled.div`
  font-size: 28px;
  font-weight: 600;
  height: 4rem;
  padding: 0.5rem;
  color: ${COLORS.BLUE};
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 16px 24px 0;
`;
