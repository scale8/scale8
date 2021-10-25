import { FC } from 'react';
import { Box, DialogContent, FormControlLabel, Switch } from '@mui/material';
import DialogActionsWithCancel from '../../molecules/DialogActionsWithCancel';
import { TwoFactorFormProps } from '../../../dialogPages/global/TwoFactor';

const TwoFactorForm: FC<TwoFactorFormProps> = (props: TwoFactorFormProps) => {
    return (
        <Box display="flex" flexDirection="column">
            <DialogContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '248px',
                }}
            >
                <small>
                    When you enable this feature, you need to enter your password plus a code that
                    is generated by a two-factor authentication app to sign in.
                    <br />
                    <br />
                </small>
                <FormControlLabel
                    control={
                        <Switch
                            checked={props.twoFactorEnabled}
                            onChange={props.toggleTwoFactorAction}
                        />
                    }
                    label="2-Factor Authentication"
                />
            </DialogContent>
            <DialogActionsWithCancel handleDialogClose={props.handleDialogClose} />
        </Box>
    );
};

export default TwoFactorForm;
