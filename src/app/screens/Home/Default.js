import React from "react";
import {
  ButtonDefault,
  MainLogo,
  ControlledCarousel,
  Title,
  AccordionToggle,
  BadgeWithText,
  BadgeWithCounter,
  BadgeAlone,
  Pills,
  BtnGroup,
  BasicCard,
  CardsGroupNoMargin,
  CardsGroupMargin,
  BasicDropdown,
  BasicInput,
  InputPrepend,
  InputPrependRight,
  InputCheckbox,
  InputRadio,
  InputMultiAddon,
  InputMultiAddonRight,
  InputBtn,
  InputBtnRight,
  InputDropdown,
  InputDropdownRight,
  ListGroups,
  BaseNav,
  VerticalNav,
  //NavPills,
  BasicPagination,
  BasicTooltip,
  BasicToast,
  BasicPopover,
  DefaultModal,
  ModalCenter,
  Images,
  ImageFluid,
  RenderCode
} from "../../components";
import {
  dataImages,
  dataAccordion,
  dataGroupBtn,
  dataCardGroup,
  dataDropdown,
  dataInputDropdown,
  dataListGroup,
  dataNav,
  dataTooltip
} from "../../data/data";
import "./style.css";

const Default = () => {
  return (
    <div>
      <div className="container-fluid home">
        {/* <MainLogo />
        <ImageFluid src='https://blog.twitter.com/content/dam/blog-twitter/official/en_us/products/2017/rethinking-our-default-profile-photo/Avatar-Blog2-Round1.png.img.fullhd.medium.png'/>
        <Images className='imgcuadrada' src='https://nato-pa.int/sites/default/files/default_images/default-image.jpg' rounded/> 
        <Images src='https://nato-pa.int/sites/default/files/default_images/default-image.jpg' roundedCircle/>
        <Images src='https://nato-pa.int/sites/default/files/default_images/default-image.jpg' thumbnail/>
        <ModalCenter header='Modal' title='modal title' body='modal body' titlebtn='close' titlebtnmodal='Modal centrado'/>
        <DefaultModal titleBtn='Modal default' title='Título modal' body='Body modal' titleBtnClose='Close modal' titleBtnSave='Save modal'/>
        <BasicPopover
          title='popover'
          direction='bottom'
          titleBtn='popover disabled'
          disabled
        />
        <BasicPopover title='popover' titleBtn='popover active' />
        <BasicToast body='body toast' title='btn toast' header='header' />
        <BasicTooltip items={dataTooltip} />
        <BasicPagination />
        <VerticalNav items={dataNav} />
        <BaseNav items={dataNav} variant='tabs' active='/home' />
        <ListGroups items={dataListGroup} />
        <InputDropdownRight items={dataInputDropdown} title='dropdown' />
        <InputDropdown items={dataInputDropdown} title='dropdown' />
        <InputBtnRight title='button' />
        <InputBtn title='button' />
        <InputMultiAddonRight placeholder='input' addon1='1' addon2='2' />
        <InputMultiAddon placeholder='input' addon1='1' addon2='2' />
        <InputRadio />
        <InputCheckbox />
        <InputPrependRight text='@' />
        <InputPrepend text='@' />
        <BasicInput />
        <BasicDropdown items={dataDropdown} title='dropdown' variant='info' />
        <CardsGroupMargin items={dataCardGroup} />
        <CardsGroupNoMargin items={dataCardGroup} />
        <BasicCard
          src='http://www.gifs-animados.es/wallpapers/wallpapers/ardillas/wallpaper-ardillas-4838185.jpg'
          title='Title'
          text='Text'
          titleBtn='Aceptar'
        />
        <br />
        <BtnGroup items={dataGroupBtn} />
        <ButtonDefault name='active' active />
        <ButtonDefault name='block' block />
        <ButtonDefault name='disabled' disabled />
        <Title title='Home' />
        <Pills title='pill' />
        <BadgeAlone title='badge solo' />
        <BadgeWithText text='Nuevo badge' title='Nuevo' />
        <BadgeWithCounter text='badge con contador' counter='3' />
        <AccordionToggle items={dataAccordion} />
        <ControlledCarousel items={dataImages} /> */}
        <div className="example">
          <MainLogo />
          <RenderCode>&lt;MainLogo /&gt;</RenderCode>
        </div>
        <div className="example">
          <ImageFluid src="https://blog.twitter.com/content/dam/blog-twitter/official/en_us/products/2017/rethinking-our-default-profile-photo/Avatar-Blog2-Round1.png.img.fullhd.medium.png" />
          <RenderCode>
            &lt;ImageFluid
            src='https://blog.twitter.com/content/dam/blog-twitter/official/en_us/products/2017/rethinking-our-default-profile-photo/Avatar-Blog2-Round1.png.img.fullhd.medium.png'/&gt;
          </RenderCode>
        </div>
        <div className="example">
          <Images
            className="imgcuadrada"
            src="https://nato-pa.int/sites/default/files/default_images/default-image.jpg"
            rounded
          />
          <RenderCode>
            &lt;Images className='imgcuadrada'
            src='https://nato-pa.int/sites/default/files/default_images/default-image.jpg'
            rounded/&gt;
          </RenderCode>
        </div>
        <div className="example">
          <Images
            src="https://nato-pa.int/sites/default/files/default_images/default-image.jpg"
            roundedCircle
          />
          <RenderCode>
            &lt;Images
            src='https://nato-pa.int/sites/default/files/default_images/default-image.jpg'
            roundedCircle/&gt;
          </RenderCode>
        </div>
        <div className="example">
          <Images
            src="https://nato-pa.int/sites/default/files/default_images/default-image.jpg"
            thumbnail
          />
          <RenderCode>
            &lt;Images
            src='https://nato-pa.int/sites/default/files/default_images/default-image.jpg'
            thumbnail/&gt;
          </RenderCode>
        </div>
        <div className="example">
          <ModalCenter
            header="Modal"
            title="modal title"
            body="modal body"
            titlebtn="close"
            titlebtnmodal="Modal centrado"
          />
          <RenderCode>
            &lt;ModalCenter header='Modal' title='modal title' body='modal body'
            titlebtn='close' titlebtnmodal='Modal centrado'/&gt;
          </RenderCode>
        </div>
        <div className="example">
          <DefaultModal
            titleBtn="Modal default"
            title="Título modal"
            body="Body modal"
            titleBtnClose="Close modal"
            titleBtnSave="Save modal"
          />
          <RenderCode>
            &lt;DefaultModal titleBtn='Modal default' title='Título modal'
            body='Body modal' titleBtnClose='Close modal' titleBtnSave='Save
            modal'/&gt;
          </RenderCode>
        </div>
        <div className="example">
          <BasicPopover
            title="popover"
            direction="bottom"
            titleBtn="popover disabled"
            disabled
          />
          <RenderCode>
            &lt;BasicPopover title='popover' direction='bottom'
            titleBtn='popover disabled' disabled /&gt;
          </RenderCode>
        </div>
        <div className="example">
          <BasicPopover title="popover" titleBtn="popover active" />
          <RenderCode>
            &lt;BasicPopover title='popover' titleBtn='popover active' /&gt;
          </RenderCode>
        </div>
        <div className="example">
          <BasicToast body="body toast" title="btn toast" header="header" />
          <RenderCode>
            &lt;BasicToast body='body toast' title='btn toast' header='header'
            /&gt;
          </RenderCode>
        </div>
        <div className="example">
          <BasicPagination />
          <RenderCode>&lt;BasicPagination /&gt;</RenderCode>
        </div>
        <div className="example">
          <InputBtnRight title="button" />
          <RenderCode>&lt;InputBtnRight title='button' /&gt;</RenderCode>
        </div>
        <div className="example">
          <InputBtn title="button" />
          <RenderCode>&lt;InputBtn title='button' /&gt;</RenderCode>
        </div>
        <div className="example">
          <InputMultiAddonRight placeholder="input" addon1="1" addon2="2" />
          <RenderCode>
            &lt;InputMultiAddonRight placeholder='input' addon1='1' addon2='2'
            /&gt;
          </RenderCode>
        </div>
        <div className="example">
          <InputMultiAddon placeholder="input" addon1="1" addon2="2" />
          <RenderCode>
            &lt;InputMultiAddon placeholder='input' addon1='1' addon2='2' /&gt;
          </RenderCode>
        </div>
        <div className="example">
          <InputRadio />
          <RenderCode>&lt;InputRadio /&gt;</RenderCode>
        </div>
        <div className="example">
          <InputCheckbox />
          <RenderCode>&lt;InputCheckbox /&gt;</RenderCode>
        </div>
        <div className="example">
          <InputPrependRight text="@" />
          <RenderCode>&lt;InputPrependRight text='@' /&gt;</RenderCode>
        </div>
        <div className="example">
          <InputPrepend text="@" />
          <RenderCode>&lt;InputPrepend text='@' /&gt;</RenderCode>
        </div>
        <div className="example">
          <BasicInput />
          <RenderCode>&lt;BasicInput /&gt;</RenderCode>
        </div>
        <div className="example">
          <BasicCard
            src="http://www.gifs-animados.es/wallpapers/wallpapers/ardillas/wallpaper-ardillas-4838185.jpg"
            title="Title"
            text="Text"
            titleBtn="Aceptar"
          />
          <RenderCode>
            &lt;BasicCard
            src='http://www.gifs-animados.es/wallpapers/wallpapers/ardillas/wallpaper-ardillas-4838185.jpg'
            title='Title' text='Text' titleBtn='Aceptar' /&gt;
          </RenderCode>
        </div>
        <div className="example">
          <ButtonDefault name="disabled" disabled />
          <ButtonDefault name="block" block />
          <ButtonDefault name="active" active />
          <RenderCode>
            &lt;ButtonDefault name='disabled' disabled /&gt;
          </RenderCode>
          <RenderCode>&lt;ButtonDefault name='block' block /&gt;</RenderCode>
          <RenderCode>&lt;ButtonDefault name='active' active /&gt;</RenderCode>
        </div>
        <div className="example">
          <BadgeWithCounter text="badge con contador" counter="3" />
          <RenderCode>
            &lt;BadgeWithCounter text='badge con contador' counter='3' /&gt;
          </RenderCode>
        </div>
        <div className="example">
          <BadgeWithText text="Nuevo badge" title="Nuevo" />
          <RenderCode>
            &lt;BadgeWithText text='Nuevo badge' title='Nuevo' /&gt;
          </RenderCode>
        </div>
        <div className="example">
          <BadgeAlone title="badge solo" />
          <RenderCode>&lt;BadgeAlone title='badge solo' /&gt;</RenderCode>
        </div>
        <div className="example">
          <Pills title="pill" />
          <RenderCode>&lt;Pills title='pill' /&gt;</RenderCode>
        </div>
        <div className="example">
          <Title title="Home" />
          <RenderCode>&lt;Title title='Home' /&gt;</RenderCode>
        </div>
      </div>
    </div>
  );
};

export default Default;

{
  /* <div className='example'> 
<RenderCode>
&lt; &gt;
</RenderCode>
</div> */
}
