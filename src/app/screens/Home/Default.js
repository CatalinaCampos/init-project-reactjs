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

const Default = () => (
  <div>
    <div className="container-fluid home">
      <div className="example">
        <h4>Tooltip</h4>
        <div className="demo">
          <BasicTooltip items={dataTooltip} />
        </div>
        <div className="code">
          <RenderCode>
            &lt;BasicTooltip items=&#123;dataTooltip&#125; /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Button Group</h4>
        <div className="demo">
          <BtnGroup items={dataGroupBtn} />
        </div>
        <div className="code">
          <RenderCode>
            &lt;BtnGroup items=&#123;dataGroupBtn&#125; /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Carousel</h4>
        <div className="demo">
          <ControlledCarousel items={dataImages} />
        </div>
        <div className="code">
          <RenderCode>
            &lt;ControlledCarousel items=&#123;dataImages&#125; /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Cards group no-margin</h4>
        <div className="demo">
          <CardsGroupNoMargin items={dataCardGroup} />
        </div>
        <div className="code">
          <RenderCode>
            &lt;CardsGroupNoMargin items=&#123;dataCardGroup&#125; /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Cards group with margin</h4>
        <div className="demo">
          <CardsGroupMargin items={dataCardGroup} />
        </div>
        <div className="code">
          <RenderCode>
            &lt;CardsGroupMargin items=&#123;dataCardGroup&#125; /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Dropdown</h4>
        <div className="demo">
          <BasicDropdown items={dataDropdown} title="dropdown" variant="info" />
        </div>
        <div className="code">
          <RenderCode>
            &lt;BasicDropdown items=&#123;dataDropdown&#125; title='dropdown'
            variant='info' /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Input dropdown left</h4>
        <div className="demo">
          <InputDropdown items={dataInputDropdown} title="dropdown" />
        </div>
        <div className="code">
          <RenderCode>
            &lt;InputDropdown items=&#123;dataInputDropdown&#125;
            title='dropdown' /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Input dropdown right</h4>
        <div className="demo">
          <InputDropdownRight items={dataInputDropdown} title="dropdown" />
        </div>
        <div className="code">
          <RenderCode>
            &lt;InputDropdownRight items=&#123;dataInputDropdown&#125;
            title='dropdown' /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>List group</h4>
        <div className="demo">
          <ListGroups items={dataListGroup} />
        </div>
        <div className="code">
          <RenderCode>
            &lt;ListGroups items=&#123;dataListGroup&#125; /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Nav</h4>
        <div className="demo">
          <BaseNav items={dataNav} variant="tabs" active="/home" />
        </div>
        <div className="code">
          <RenderCode>
            &lt;BaseNav items=&#123;dataNav&#125; variant='tabs' active='/home'
            /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Vertical nav</h4>
        <div className="demo">
          <VerticalNav items={dataNav} />
        </div>
        <div className="code">
          <RenderCode>
            &lt;VerticalNav items=&#123;dataNav&#125; /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Accordion</h4>
        <div className="demo">
          <AccordionToggle items={dataAccordion} />
        </div>
        <div className="code">
          <RenderCode>
            &lt;AccordionToggle items=&#123;data&#125; /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Logo</h4>
        <div className="demo">
          <MainLogo />
        </div>
        <div className="code">
          <RenderCode>&lt;MainLogo /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Image fluid</h4>
        <div className="demo">
          <ImageFluid src="https://blog.twitter.com/content/dam/blog-twitter/official/en_us/products/2017/rethinking-our-default-profile-photo/Avatar-Blog2-Round1.png.img.fullhd.medium.png" />
        </div>
        <div className="code">
          <RenderCode>&lt;ImageFluid src='linkImg'/&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Image rounded</h4>
        <div className="demo">
          <Images
            className="imgcuadrada"
            src="https://nato-pa.int/sites/default/files/default_images/default-image.jpg"
            rounded
          />
        </div>
        <div className="code">
          <RenderCode>
            &lt;Images className='imgcuadrada' src='linkImg' rounded/&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Image circle</h4>
        <div className="demo">
          <Images
            src="https://nato-pa.int/sites/default/files/default_images/default-image.jpg"
            roundedCircle
          />
        </div>
        <div className="code">
          <RenderCode>&lt;Images src='linkImg' roundedCircle/&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Image thumbnail</h4>
        <div className="demo">
          <Images
            src="https://nato-pa.int/sites/default/files/default_images/default-image.jpg"
            thumbnail
          />
        </div>
        <div className="code">
          <RenderCode>&lt;Images src='linkImg' thumbnail/&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Modal center</h4>
        <div className="demo">
          <ModalCenter
            header="Modal"
            title="modal title"
            body="modal body"
            titlebtn="close"
            titlebtnmodal="Modal centrado"
          />
        </div>
        <div className="code">
          <RenderCode>
            &lt;ModalCenter header='Modal' title='modal title' body='modal body'
            <br />
            titlebtn='close' titlebtnmodal='Modal centrado'/&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Modal</h4>
        <div className="demo">
          <DefaultModal
            titleBtn="Modal default"
            title="Título modal"
            body="Body modal"
            titleBtnClose="Close modal"
            titleBtnSave="Save modal"
          />
        </div>
        <div className="code">
          <RenderCode>
            &lt;DefaultModal titleBtn='Modal default' title='Título modal'{" "}
            <br />
            body='Body modal' titleBtnClose='Close modal' titleBtnSave='Save
            modal'/&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Popover</h4>
        <div className="demo">
          <BasicPopover
            title="popover"
            direction="bottom"
            titleBtn="popover disabled"
            disabled
          />
          <BasicPopover title="popover" titleBtn="popover active" />
        </div>
        <div className="code">
          <RenderCode>
            &lt;BasicPopover title='popover' direction='bottom'
            titleBtn='popover disabled' disabled /&gt;
          </RenderCode>
          <RenderCode>
            &lt;BasicPopover title='popover' titleBtn='popover active' /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Toast</h4>
        <div className="demo">
          <BasicToast body="body toast" title="btn toast" header="header" />
        </div>
        <div className="code">
          <RenderCode>
            &lt;BasicToast body='body toast' title='btn toast' header='header'
            /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Pagination</h4>
        <div className="demo">
          <BasicPagination />
        </div>
        <div className="code">
          <RenderCode>&lt;BasicPagination /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Input button right</h4>
        <div className="demo">
          <InputBtnRight title="button" />
        </div>
        <div className="code">
          <RenderCode>&lt;InputBtnRight title='button' /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Input button</h4>
        <div className="demo">
          <InputBtn title="button" />
        </div>
        <div className="code">
          <RenderCode>&lt;InputBtn title='button' /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Input multi addon right</h4>
        <div className="demo">
          <InputMultiAddonRight placeholder="input" addon1="1" addon2="2" />
        </div>
        <div className="code">
          <RenderCode>
            &lt;InputMultiAddonRight placeholder='input' addon1='1' addon2='2'
            /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Input multi addon</h4>
        <div className="demo">
          <InputMultiAddon placeholder="input" addon1="1" addon2="2" />
        </div>
        <div className="code">
          <RenderCode>
            &lt;InputMultiAddon placeholder='input' addon1='1' addon2='2' /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Input radio</h4>
        <div className="demo">
          <InputRadio />
        </div>
        <div className="code">
          <RenderCode>&lt;InputRadio /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Input checkbox</h4>
        <div className="demo">
          <InputCheckbox />
        </div>
        <div className="code">
          <RenderCode>&lt;InputCheckbox /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Input prepend right</h4>
        <div className="demo">
          <InputPrependRight text="@" />
        </div>
        <div className="code">
          <RenderCode>&lt;InputPrependRight text='@' /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Input prepend</h4>
        <div className="demo">
          <InputPrepend text="@" />
        </div>
        <div className="code">
          <RenderCode>&lt;InputPrepend text='@' /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Input</h4>
        <div className="demo">
          <BasicInput />
        </div>
        <div className="code">
          <RenderCode>&lt;BasicInput /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Card</h4>
        <div className="demo">
          <BasicCard
            src="http://www.gifs-animados.es/wallpapers/wallpapers/ardillas/wallpaper-ardillas-4838185.jpg"
            title="Title"
            text="Text"
            titleBtn="Aceptar"
          />
        </div>
        <div className="code">
          <RenderCode>
            &lt;BasicCard src='linkImg' title='Title' text='Text'
            titleBtn='Aceptar' /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Button</h4>
        <div className="demo">
          <ButtonDefault name="disabled" disabled />
          <ButtonDefault name="block" block />
          <ButtonDefault name="active" active />
        </div>
        <div className="code">
          <RenderCode>
            &lt;ButtonDefault name='disabled' disabled /&gt;
          </RenderCode>
          <RenderCode>&lt;ButtonDefault name='block' block /&gt;</RenderCode>
          <RenderCode>&lt;ButtonDefault name='active' active /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Badge with counter</h4>
        <div className="demo">
          <BadgeWithCounter text="badge con contador" counter="3" />
        </div>
        <div className="code">
          <RenderCode>
            &lt;BadgeWithCounter text='badge con contador' counter='3' /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Basge with text</h4>
        <div className="demo">
          <BadgeWithText text="Nuevo badge" title="Nuevo" />
        </div>
        <div className="code">
          <RenderCode>
            &lt;BadgeWithText text='Nuevo badge' title='Nuevo' /&gt;
          </RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Badge</h4>
        <div className="demo">
          <BadgeAlone title="badge solo" />
        </div>
        <div className="code">
          <RenderCode>&lt;BadgeAlone title='badge solo' /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Pills</h4>
        <div className="demo">
          <Pills title="pill" />
        </div>
        <div className="code">
          <RenderCode>&lt;Pills title='pill' /&gt;</RenderCode>
        </div>
      </div>

      <div className="example">
        <h4>Title</h4>
        <div className="demo">
          <Title title="Home" />
        </div>
        <div className="code">
          <RenderCode>&lt;Title title='Home' /&gt;</RenderCode>
        </div>
      </div>
    </div>
  </div>
);

export default Default;

/* <div className='example'> 
<RenderCode>
&lt; &gt;
</RenderCode>
</div> */
