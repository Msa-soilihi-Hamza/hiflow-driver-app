import React from 'react';
import { render } from '@testing-library/react-native';
import StatusBadge from '../StatusBadge';
import { colors } from '../../theme';

describe('StatusBadge Component', () => {
    it('should render "Disponible" label', () => {
        const { getByText } = render(<StatusBadge statut="disponible" />);
        expect(getByText('Disponible')).toBeDefined();
    });

    it('should render "En cours" label', () => {
        const { getByText } = render(<StatusBadge statut="en_cours" />);
        expect(getByText('En cours')).toBeDefined();
    });

    it('should render "Livrée" label', () => {
        const { getByText } = render(<StatusBadge statut="livree" />);
        expect(getByText('Livrée')).toBeDefined();
    });

    it('should match snapshot', () => {
        const { toJSON } = render(<StatusBadge statut="disponible" />);
        expect(toJSON()).toMatchSnapshot();
    });
});
