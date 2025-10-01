import {useGetCategoriesQuery} from "@/api/productsApi.ts";
import {setCategory} from "@/app/appSlice.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {PATH} from "@/routes/paths.ts";
import {
    Container,
    useAppDispatch,
    useAppSelector,
    StyledButton,
    MobileCategoryItem,
    MobileSidebarContainer,
    CategoriesGrid,
    SidebarTitle,
} from "../index.ts";

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({isOpen, onClose}) => {
    const {data: categories, isLoading} = useGetCategoriesQuery();
    const dispatch = useAppDispatch();
    const selectedCategory = useAppSelector(state => state.app.categoryId);
    const navigate = useNavigate();

    useEffect(() => {
        const html = document.documentElement;
        html.style.overflow = isOpen ? "hidden" : "";
        return () => {
            html.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleCategoryClick = (id: number) => {
        dispatch(setCategory(id));
        navigate(PATH.HOME)
        onClose();
    };

    const handleNavigate = (path: string) => {
        onClose();
        navigate(path);
    };

    if (isLoading) return null;
    if (!categories) return <div>No categories found</div>;

    const categoriesToShow = categories.slice(0, 5);

    return (
        <MobileSidebarContainer isOpen={isOpen}>
            <Container>
                <SidebarTitle>Category</SidebarTitle>
                <CategoriesGrid>
                    <MobileCategoryItem
                        active={selectedCategory === 0}
                        onClick={() => handleCategoryClick(0)}
                    >
                        All
                    </MobileCategoryItem>
                    {categoriesToShow?.map(cat => (
                        <MobileCategoryItem
                            key={cat.id}
                            active={cat.id === selectedCategory}
                            onClick={() => handleCategoryClick(cat.id)}
                        >
                            {cat.name}
                        </MobileCategoryItem>
                    ))}
                </CategoriesGrid>
                <SidebarTitle>Information</SidebarTitle>
                <CategoriesGrid>
                    <StyledButton onClick={() => handleNavigate(PATH.ABOUT_PAGE)}>
                        About
                    </StyledButton>
                    <StyledButton onClick={() => handleNavigate(PATH.CONTACT_PAGE)}>
                        Contact
                    </StyledButton>
                    <StyledButton onClick={() => handleNavigate(PATH.PRIVACY_PAGE)}>
                        Privacy Policy
                    </StyledButton>
                    <StyledButton onClick={() => handleNavigate(PATH.FAQ_PAGE)}>
                        FAQ
                    </StyledButton>
                </CategoriesGrid>
            </Container>
        </MobileSidebarContainer>
    );
};
