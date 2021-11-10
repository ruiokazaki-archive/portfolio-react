import { VFC } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { worksData } from '../../data/works';

import { SubmitButton } from '../organisms/Contact.style';

import Header from '../organisms/Header';
import SectionTitle from '../atoms/SectionTitle';

const githubIcon =
  'https://click.ecc.ac.jp/ecc/rokazaki/rurus_portfolio/svg/Github.svg';
const linkIcon =
  'https://click.ecc.ac.jp/ecc/rokazaki/rurus_portfolio/svg/Link.svg';

const Work: VFC = () => {
  const { workId } = useParams();
  const worksId: number[] = [];

  worksData.forEach((work) => worksId.push(work.id));

  if (worksId.includes(Number(workId))) {
    const {
      title,
      description,
      position,
      impressions,
      programmingLanguages,
      toolsUsed,
      teamProduction,
      usetime,
      season,
      img,
      githubLink,
      productionLink,
    } = worksData[Number(workId) - 1];

    const githubLinks = githubLink.map((github) => (
      <p key={github.name}>
        <a
          href={github.url}
          target="ruru"
          className="flex items-center text-pink1"
          style={{ marginBottom: '16px', fontSize: '16px' }}
        >
          <img
            style={{
              width: '20px',
              height: '20px',
              display: 'block',
              marginRight: '8px',
            }}
            src={githubIcon}
            alt="githubのアイコン"
          />
          {github.name} - {github.url}
        </a>
      </p>
    ));
    const productionLinks = productionLink.map((production) => (
      <p key={production.name}>
        <a
          href={production.url}
          target="ruru"
          className="flex items-center text-green1"
          style={{ marginBottom: '16px', fontSize: '16px' }}
        >
          <img
            style={{
              width: '20px',
              height: '20px',
              display: 'block',
              marginRight: '8px',
            }}
            src={linkIcon}
            alt="linkのアイコン"
          />
          {production.name} - {production.url}
        </a>
      </p>
    ));

    return (
      <>
        <Header />
        <div
          style={{
            minHeight: '100vh',
            paddingTop: '64px',
          }}
          className="text-white1 flex"
        >
          {/* 左側 */}
          <div
            className="relative"
            style={{ minWidth: '500px', width: '50%', padding: '32px' }}
          >
            <div
              className="absolute"
              style={{
                height: 'calc(100% + 64px)',
                background: '#f858f1',
                width: '2px',
                top: '-64px',
                left: '8px',
              }}
            />
            <SectionTitle sectionTitle="Work" />
            <h3
              style={{
                marginBottom: '32px',
                fontSize: '48px',
                lineHeight: '56px',
              }}
            >
              {title}
            </h3>
            <SectionTitle sectionTitle="Description" />
            <p
              style={{
                marginBottom: '32px',
                fontSize: '14px',
                lineHeight: '28px',
              }}
            >
              {description}
            </p>
            <SectionTitle sectionTitle="Position" />
            <p
              style={{
                marginBottom: '32px',
                fontSize: '14px',
                lineHeight: '28px',
              }}
            >
              {position}
            </p>
            <SectionTitle sectionTitle="Impressions" />
            <p
              style={{
                marginBottom: '32px',
                fontSize: '14px',
                lineHeight: '28px',
              }}
            >
              {impressions}
            </p>
            <SectionTitle sectionTitle="ProgrammingLanguages" />
            <p
              style={{
                marginBottom: '32px',
                fontSize: '14px',
                lineHeight: '28px',
              }}
            >
              {programmingLanguages}
            </p>
            <SectionTitle sectionTitle="ToolsUsed" />
            <p
              style={{
                marginBottom: '32px',
                fontSize: '14px',
                lineHeight: '28px',
              }}
            >
              {toolsUsed}
            </p>
            <Link to="/">
              <SubmitButton type="button" style={{ marginTop: '80px' }}>
                HOME
              </SubmitButton>
            </Link>
          </div>
          {/* 右側 */}
          <div
            className="fixed h-full right-0 top-0"
            style={{
              minWidth: '500px',
              width: '50%',
              padding: '96px 0 32px 16px',
              height: '100%',
              overflow: 'scroll',
            }}
          >
            <div
              className="flex align-center"
              style={{ gap: '16px', marginBottom: '32px' }}
            >
              {/* ここから */}
              <div
                className="flex justify-center items-center"
                style={{
                  border: '1px solid #F858F1',
                  borderRadius: '8px',
                  width: '67px',
                  height: '67px',
                  fontSize: '14px',
                  lineHeight: '18px',
                }}
              >
                <p
                  className="text-center"
                  style={{ height: 'fit-content', width: '59px' }}
                >
                  {usetime}時間
                </p>
              </div>
              {/* ここまで */}
              {/* ここから */}
              <div
                className="flex justify-center items-center"
                style={{
                  border: '1px solid #F858F1',
                  borderRadius: '8px',
                  width: '67px',
                  height: '67px',
                  fontSize: '14px',
                  lineHeight: '18px',
                }}
              >
                <p
                  className="text-center"
                  style={{ height: 'fit-content', width: '59px' }}
                >
                  {teamProduction === 0 ? '個人制作' : 'グループ制作'}
                </p>
              </div>
              {/* ここまで */}
              {/* ここから */}
              <div
                className="flex justify-center items-center"
                style={{
                  border: '1px solid #F858F1',
                  borderRadius: '8px',
                  width: '67px',
                  height: '67px',
                  fontSize: '14px',
                  lineHeight: '18px',
                }}
              >
                <p
                  className="text-center"
                  style={{ height: 'fit-content', width: '59px' }}
                >
                  {season}
                </p>
              </div>
              {/* ここまで */}
            </div>
            <figure>
              <img
                src={img}
                alt={title}
                style={{
                  aspectRatio: '16 / 9',
                  objectFit: 'cover',
                  width: '100%',
                  display: 'block',
                }}
              />
            </figure>

            <div style={{ marginTop: '32px' }}>
              {githubLinks}
              {productionLinks}
            </div>
          </div>
        </div>
      </>
    );
  }

  return <Navigate to="/" replace />;
};

export default Work;
