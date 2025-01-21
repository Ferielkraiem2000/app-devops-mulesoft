import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
  user: {
    name: string;
    workEmail: string;
  };
}
const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose, user }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Profil de l'utilisateur</DialogTitle>
    <DialogContent>
      <Typography variant="body1">Nom: {user.name}</Typography>
      <Typography variant="body1">Email: {user.workEmail}</Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Fermer
      </Button>
    </DialogActions>
  </Dialog>
);

export default ProfileModal;
