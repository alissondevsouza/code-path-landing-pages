import { Metadata } from 'next';
import HeroSection from './(sections)/HeroSection';
import Header from './(sections)/Header';
import Main from './(sections)/Main';
import EvidenceSection from './(sections)/EvidenceSection';
import AboutSection from './(sections)/AboutSection';
import WhoAreWeSection from './(sections)/WhoAreWeSection';
import ProductContent from './(sections)/ProductContent';
import GuaranteeSection from './(sections)/GuaranteeSection';
import CheckmateSection from './(sections)/CheckmateSection';
import Footer from './(sections)/Footer';

export const metadata: Metadata = {
    title: 'Código Pro - Domine o Desenvolvimento de Software',
    description: '6 Ebooks Premium + Bônus Exclusivos',
}

export default function CodigoProPage() {

    return (
        <Main>
            <Header>
                <HeroSection>
                    <EvidenceSection>
                        <AboutSection>
                            <WhoAreWeSection>
                                <ProductContent>
                                    <GuaranteeSection>
                                        <CheckmateSection>
                                            <Footer />
                                        </CheckmateSection>
                                    </GuaranteeSection>
                                </ProductContent>
                            </WhoAreWeSection>
                        </AboutSection>
                    </EvidenceSection>
                </HeroSection>
            </Header>
        </Main>
    )
}