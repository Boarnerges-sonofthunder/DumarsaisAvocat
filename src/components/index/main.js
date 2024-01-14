import React from "react";
import "../../Styles/main.css";
import Footer from "../../components/footer";
import { motion, useTransform, useScroll } from "framer-motion";

const Main = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <>
      <header>
        <motion.div
          initial={{ x: -2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="logo-title"
          >
            <img src="../../img/logoMarteau.png" alt="logoD" loading="lazy" />
          </motion.div>
          <div className="name-info">
            <div className="info-title">
              Joignable en tout temps: (514) 296-4104
              <br />
              Dumarsais.woosevelt@gmail.com
            </div>
          </div>
        </motion.div>
      </header>

      <section >
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }} className="defpetitcreance">
          <div className="Q?creance">
            <h1>Qu’est-ce que la Cour des petites créances?</h1>
          </div>
          <h3 className="def">
            La Cour des petites créances est une division de la Cour du Québec
            qui entend les poursuites de nature civile dont la valeur en jeux
            est d’au plus 15 000$.
          </h3>
        </motion.div>
      </section>

      <section>
        <div className="presenting">
          <div className="balance">
            <img src="../../img/balance_justice.png" alt="balance" />
          </div>
          <div className="intro">
            <h3>
              En principe, les personnes qui font une demande ou qui sont
              poursuivies à la Cour des petites créances n’ont pas le droit
              d’être représentées par un avocat. Cependant, vous pouvez
              bénéficier d’un service d’accompagnement et d’aide à la rédaction
              des documents juridiques.
            </h3>
          </div>
        </div>
      </section>

      <section className="card">
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }} className="procedure">
          <h1>
            Quelles sont les principales étapes de la procédure à la Cour des
            petites créances?
          </h1>
          <div className="defprocedure">
            <div>
              <div className="number">1</div>
              <div className="contante">Le demandeur dépose au greffe de la Cour une demande en justice
                dans laquelle il présente ses prétentions.</div>
            </div>
            <div className="li">
              <div className="number">2</div>
              <div className="contante">Le défendeur doit répondre à la demande en présentant ses
                prétentions.</div>
            </div>
            <div className="li">
              <div className="number">3</div>
              <div className="contante">La médiation obligatoire ou facultative selon le cas.</div>
            </div>
            <div className="li">
              <div className="number">4</div>
              <div className="contante">L’arbitrage obligatoire ou facultatif selon le cas.</div>
            </div>
            <div className="li">
              <div className="number">5</div>
              <div className="contante">À moins d’un règlement entre les parties, la cause pourra être
                entendue par un juge qui décidera en fonction des faits, des
                prétentions et des règles juridiques applicables.</div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="card">
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }} className="procedure">
          <h1>Qu'est-ce que la demande en justice?</h1>

          <div className="defprocedure">
            <h2>
              La demande en justice est l'acte de procédure dans lequel la
              partie demanderesse indique la nature du recours.
            </h2>
            <div className="liste">
              <ul>
                <li>Indique qui est la partie défenderesse.</li>
                <li>Indique la faute reprochée à la partie défenderesse.</li>
                <li>
                  Indique les dommages causés par la faute de la partie
                  défenderesse.
                </li>
                <li>Indique les pièces qui soutiennent ses prétentions.</li>
                <li>Indique le montant réclamé à titre de dédommagement.</li>
              </ul>
              <span>
                La demande en justice doit, en outre, être notifiée à l'autre
                partie dans les trois mois de son dépôt au greffe de la Cour.
              </span>
            </div>
            <h3>
              La poursuite civile débute par le dépôt au tribunal d'une demande.
              Il est possible de faire cette étape par la plateforme numérique
              du Gouvernement du Québec :
              <a href="https://www.quebec.ca/justice-et-etat-civil/petites-creances/poursuivre/etapes-demande/formulaire-sj-870e">
                Formulaire Demande aux petites créances (SJ-870E)
              </a>
            </h3>
          </div>
        </motion.div>
      </section>

      <section className="card">
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }} className="procedure">
          <h1>Qu’est-ce que la réponse à la demande?</h1>

          <div className="defprocedure">
            <h2>
              La réponse à la demande ou la contestation est l’acte de procédure
              dans lequel le défendeur admet ou réfute les prétentions du
              demandeur.
            </h2>
            <span>
              Dans sa contestation, le défendeur explique pourquoi la demande
              devrait être rejetée par la Cour. Il est possible, dans certaines
              situations, que le défendeur veuille lui-même réclamer quelque
              chose du demandeur.
            </span>
          </div>
        </motion.div>
      </section>

      <section className="card1">
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }} className="procedure">
          <h1>Qu’est-ce que la médiation pour les petites créances?</h1>

          <div className="defprocedure">
            <h2>
              La médiation pour les petites créances est un moyen de permettre
              aux parties de discuter en présence d’un médiateur afin de tenter
              de parvenir à un règlement.
            </h2>
            <span>
              Pour tenir la médiation, les deux parties doivent consentir à
              référer le dossier à la médiation. Le service de médiation permet
              aux parties d’être assistées, sans frais, par un médiateur
              accrédité pour tenter de régler le dossier à l’amiable. La
              médiation est obligatoire pour certains dossiers sont la somme en
              litige est de 5 000$ et moins. La médiation est aussi offerte à
              distance. Pour en savoir plus, consultez l’information du
              Gouvernement du Québec : 
              <a href="https://www.quebec.ca/justice-et-etat-civil/petites-creances/mediation-arbitrage-petites-creances/arbitrage">
                Médiation aux petites créances
              </a>
            </span>
          </div>
        </motion.div>
      
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }} className="procedure">
          <h1>Qu’est-ce que l’arbitrage aux petites créances</h1>

          <div className="defprocedure">
            <h2>
              L’arbitrage est un moyen par lequel les parties soumettent leur
              litige, sans frais, à un arbitre afin qu’une sentence arbitrale
              tranche la demande. L’arbitre est un juriste d’expérience
              accrédité à cette fin.
            </h2>
            <span>
              Certains dossiers dont la somme en litige est de 5 000$ et moins
              sont automatiquement transmis à la procédure d’arbitrage.
            </span>
          </div>
        </motion.div>
      </section>

      <section className="card">
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }} className="procedure">
          <h1>
            Être assisté d’un avocat pour un dossier à la Cour des petites
            créances
          </h1>

          <div className="defprocedure">
            <span>
              L’accompagnement par un avocat pour un dossier aux petites
              créances peut faire toute la différence dans la conclusion de
              votre dossier.
            </span>
            <span>
              À la Cour des petites créances, les règles de procédures sont
              simplifiées, mais il n’en demeure pas moins qu’un avocat peut vous
              éviter de commettre certaines erreurs liées, notamment, au respect
              des délais, à la présentation de la preuve et à l’identification
              des bons arguments juridiques.
            </span>
          </div>
        </motion.div>
      </section>

      <section>
        <div className="service-title">
          <h2>Nos services</h2>
        </div>
        <div className="service-intro">
          <span>
            Nos services abordables et professionnels assurés par un avocat
            membre du Barreau du Québec vous permettront de passer à travers les
            différentes étapes d’un dossier à la Cour des petites créances. Que
            ce soit pour obtenir une consultation, pour rédiger divers documents
            ou pour bénéficier d’un accompagnement tout au long du dossier, nous
            offrons des services bilingues, à distance et dans l’ensemble du
            Québec.
          </span>
          <br />
          <br />
          <hr />
        </div>
        <br />
      </section>

      <section>
        <div className="proposition">
          <span>
            Nous vous proposons les forfaits suivants (les prix n’incluent pas
            les taxes et les frais judiciaires) :
          </span>
        </div>

        <div className="table">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="services"
          >
            <div className="head">
              <h1>Consultation et accompagnement</h1>
            </div>
            <div className="div-content">
              <h3>Consultation d’une (1) heure avec un avocat : 150$.</h3>
              <br />
              <br />
              Bénéficiez d’une consultation par téléphone ou par moyen
              technologique avec un avocat d’expérience dans les dossiers pour
              les petites créances.
            </div>
            <br />
            <div className="div-content">
              <h3>
                Service d’accompagnement tout au long du processus des petites
                créances : Prix variable.
              </h3>
              <br />
              <br />
              Service d’accompagnement tout au long du processus des petites
              créances : Prix variable.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="services"
          >
            <div className="head">
              <h1>Vous désirez poursuivre une personne?</h1>
            </div>
            <div className="div-content">
              <h3>Rédaction d’une mise en demeure par un avocat : 250$.</h3>
              <br />
              <br />
              La mise en demeure aussi connue sous l’appellation « lettre
              d’avocat » est un document dans lequel vous intimez à l’autre
              partie de faire ou de cesser de faire quelque chose sous peine de
              poursuite.
            </div>
            <br />
            <div className="div-content">
              <h3>
                Rédaction d’une demande introductive d’instance par un avocat :
                300$.
              </h3>
              <br />
              <br />
              La demande en justice est le document judiciaire à être déposé au
              tribunal pour ouvrir le dossier de Cour. Dans ce document, vous
              expliquez les faits de votre dossier, ce que vous réclamez ainsi
              que les fondements de votre réclamation.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="services"
          >
            <div className="head">
              <h1>Vous êtes poursuivie par une personne?</h1>
            </div>
            <div className="div-content">
              <h3>
                Rédaction d’une réponse à une mise en demeure par un avocat :
                250$.
              </h3>
              <br />
              <br />
              Si vous avez reçu une mise en demeure, vous pouvez répondre à
              l’autre partie que vous acceptez ou non ce qu’elle réclame.
            </div>
            <br />
            <div className="div-content">
              <h3>Rédaction d’une contestation par un avocat : 300$.</h3>
              <br />
              <br />
              La contestation est le document judiciaire dans lequel vous
              expliquez les raisons pour lesquelles vous estimez que la demande
              de l’autre partie est non fondée.
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Main;
