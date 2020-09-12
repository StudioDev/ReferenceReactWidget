import React from 'react';
import * as GlobalStyles from '../Shared/GlobalStyles';
import * as Style from './CompairEntryStyles';
/**
 * Compair Entry Screen
 * @param {props} props passed from parent
 * @returns {void}
 */
export default function CompairEntry(props) {

    const propData = props;
    const screenName = `CompairEntry${propData.referrer}`;

    return (
        <GlobalStyles.AppContainer>

            <Style.EntryWrapper>Hello</Style.EntryWrapper>



        </GlobalStyles.AppContainer>
    );

}